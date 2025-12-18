import { ExternalLink, Settings, MoreVertical, Play, Info as InfoIcon, Activity, Database, Clock, Shield, Globe } from 'lucide-react'

export default function Overview({ id }: { id: string }) {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      {/* 하단 메인 그리드 콘텐츠 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 왼쪽 2개 컬럼: Info & Specs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Section */}
          <div className="bg-white border rounded-md shadow-sm">
            <div className="p-3 border-b bg-gray-50/50 flex items-center gap-2 font-bold text-gray-700 text-sm">
              <InfoIcon size={16} /> Info
            </div>
            <div className="p-4 space-y-4 text-sm">
              <InfoRow label="Editor" value={`http://172.28.112.1:12081`} isLink />
              <InfoRow label="Status" value="running" isBadge />
              <InfoRow label="Last Updated" value="8 seconds ago" />
              <InfoRow label="Security" value="None" hasIcon />
              <InfoRow label="Scheduled Maintenance" value="Disabled" isIconBadge />
            </div>
          </div>

          {/* Specs Section */}
          <div className="bg-white border rounded-md shadow-sm">
            <div className="p-3 border-b bg-gray-50/50 flex items-center gap-2 font-bold text-gray-700 text-sm">
              <Database size={16} /> Specs
            </div>
            <div className="p-4 space-y-4 text-sm">
              <InfoRow label="Type" value="Default / Node-RED 4.1.2" />
              <InfoRow label="Template" value="Default" />
              <InfoRow label="Node-RED Version" value="4.1.2" />
              <InfoRow label="Launcher Version" value="2.24.1" />
              <InfoRow label="Node.js Version" value="20.19.6" />
            </div>
          </div>
        </div>

        {/* 오른쪽 1개 컬럼: Recent Activity */}
        <div className="bg-white border rounded-md shadow-sm flex flex-col h-fit">
          <div className="p-3 border-b bg-gray-50/50 flex items-center gap-2 font-bold text-gray-700 text-sm">
            <Activity size={16} /> Recent Activity
          </div>
          <div className="p-4 flex-1">
             <div className="text-[11px] font-bold text-gray-400 mb-4">Fri Dec 19 2025 <span className="float-right font-normal">1 Event</span></div>
             <div className="flex gap-3 text-sm items-start border-l-2 border-gray-100 pl-4 relative">
                <div className="absolute -left-[5px] top-1 w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-gray-400 text-xs tabular-nums">오전 12:13:22</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-700 leading-tight">Instance Created</p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                    Instance {id}was created in Team &apos;a&apos;
                  </p>
                </div>
                <span className="text-[10px] text-gray-300">a</span>
             </div>
             <button className="w-full mt-6 py-1.5 border border-gray-200 rounded text-xs font-bold text-gray-500 hover:bg-gray-50">
               More...
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}
// 정보 행 헬퍼 컴포넌트
function InfoRow({ label, value, isLink, isBadge, hasIcon, isIconBadge }: any) {
  return (
    <div className="flex border-b border-gray-50 pb-3 last:border-0 last:pb-0">
      <span className="w-48 text-gray-500">{label}</span>
      <div className="flex-1 font-medium">
        {isLink ? (
          <a href="#" className="text-indigo-600 flex items-center gap-1 hover:underline">
            {value} <ExternalLink size={12} />
          </a>
        ) : isBadge ? (
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1">
            <div className="w-1 h-1 bg-green-500 rounded-full" /> {value}
          </span>
        ) : isIconBadge ? (
          <span className="bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full text-[10px] font-bold border border-gray-200">
            {value}
          </span>
        ) : (
          <span className="text-gray-800">{value}</span>
        )}
      </div>
    </div>
  )
}