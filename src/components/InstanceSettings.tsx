import { useState } from 'react'
import EnvironmentSettings from './EnvironmentSettings' 

export default function InstanceSettings({ instanceId }: { instanceId: string }) {
  const [activeSubTab, setActiveSubTab] = useState("General");
  const subMenus = ["General", "Environment", "Editor", "Security", "Palette", "Launcher"];

  return (
    <div className="flex gap-8 animate-in fade-in slide-in-from-left-2 duration-500">
      {/* 좌측 세로 서브 메뉴 */}
      <div className="w-48 shrink-0 flex flex-col border-r border-gray-100">
        {subMenus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveSubTab(menu)}
            className={`text-left px-4 py-2 text-xs font-medium border-l-2 transition-all ${
              activeSubTab === menu
                ? "border-indigo-600 text-indigo-600 bg-indigo-50/30"
                : "border-transparent text-gray-500 hover:bg-gray-50"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* 우측 상세 설정 영역 */}
      <div className="flex-1">
        {activeSubTab === "General" &&(<div className="space-y-10 pb-20">
            {/* Instance Details Section */}
            <section className="space-y-6">
            <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Instance Details</h3>
            <div className="grid gap-6">
                <ReadOnlyField label="Instance ID" value="a4edc378-cb53-4d42-b981-280feedd4d18" />
                <ReadOnlyField label="Name" value={instanceId} />
                <ReadOnlyField label="Instance Type" value="Default" />
                <ReadOnlyField label="Node-RED Version" value="Node-RED 4.1.2" />
                <ReadOnlyField label="Template" value="Default" />
            </div>
            </section>

            {/* Hosting Section */}
            <section className="space-y-6">
            <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Hosting</h3>
            <ReadOnlyField label="Default URL" value="http://172.28.112.1:12081" isLink />
            </section>

            {/* Action Sections */}
            <div className="space-y-8">
            <ActionRow 
                title="Change Instance Node-RED Version" 
                desc="Changing the Instances Node-RED Version requires the instance to be restarted. The flows will not be running while this happens."
                btnText="Change Node-RED Version"
            />
            <ActionRow 
                title="Copy Instance" 
                desc="Add a new instance to your application, that is a copy of this instance."
                btnText="Duplicate Instance"
            />
            <ActionRow 
                title="Import Instance" 
                desc="Import an existing Node-RED instance."
                btnText="Import Instance"
            />
            <ActionRow 
                title="Change Instance Type" 
                desc="Changing the Instance Type will restart the instance. The flows will not be running while this happens."
                btnText="Change Instance Type"
            />

            {/* Danger Zone */}
            <div className="pt-4 space-y-6">
                <ActionRow 
                title="Suspend Instance" 
                desc="Once suspended, your instance will not be available until restarted. While suspended, the instance will consume no resources."
                btnText="Suspend Instance"
                isDanger
                />
                <ActionRow 
                title="Delete Instance" 
                desc="Once deleted, your instance is gone. This cannot be undone."
                btnText="Delete Instance"
                isDanger
                />
            </div>
            </div>
        </div>)}
        {activeSubTab === "Environment" && (
          <div className="animate-in slide-in-from-right-2 duration-300">
            {/* 환경변수 설정 화면 (이미지 d9a973 참조) */}
            <EnvironmentSettings />
          </div>
        )}
        {/* 나머지 탭들은 필요에 따라 추가 */}
        {activeSubTab === "Editor" && <div className="p-10 text-gray-400">Editor Settings Coming Soon...</div>}      
      </div>
    </div>
  )
}

// 읽기 전용 필드 컴포넌트
function ReadOnlyField({ label, value, isLink }: { label: string, value: string, isLink?: boolean }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{label}</p>
      {isLink ? (
        <a href={value} className="text-xs text-indigo-600 hover:underline">{value}</a>
      ) : (
        <p className="text-xs text-gray-700 font-medium">{value}</p>
      )}
    </div>
  )
}

// 액션 행 컴포넌트
function ActionRow({ title, desc, btnText, isDanger }: { title: string, desc: string, btnText: string, isDanger?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-10">
      <div className="space-y-1 flex-1">
        <h4 className={`text-xs font-bold ${isDanger ? 'text-red-600' : 'text-gray-700'}`}>{title}</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed max-w-xl">{desc}</p>
      </div>
      <button className={`shrink-0 px-4 py-1.5 rounded border text-xs font-bold transition-all shadow-sm ${
        isDanger 
        ? 'bg-[#ef4444] text-white border-red-500 hover:bg-red-700' 
        : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'
      }`}>
        {btnText}
      </button>
    </div>
  )
}