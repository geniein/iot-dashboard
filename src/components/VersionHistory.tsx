import { UploadCloud, Plus, Info, Camera } from 'lucide-react'

export default function VersionHistory() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      {/* 탭 내부 툴바 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1 bg-white border rounded-md p-1 shadow-sm">
          <button className="px-3 py-1 text-xs font-bold bg-[#3b3a95] text-white rounded">Snapshots</button>
          <button className="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-50 rounded">Timeline</button>
          <div className="px-2 text-gray-400 border-l ml-1">
             <Info size={14} />
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-indigo-600 text-indigo-600 rounded-md text-xs font-bold hover:bg-indigo-50 transition-colors">
            <UploadCloud size={16} /> Upload Snapshot
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#3b3a95] text-white rounded-md text-xs font-bold hover:bg-[#2e2d7a] transition-colors">
            <Plus size={16} /> Create Snapshot
          </button>
        </div>
      </div>

      {/* 중앙 Empty State 영역 */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
        {/* 중앙 아이콘 그래픽 (이미지 느낌 재현) */}
        <div className="relative mb-8 opacity-20">
          <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-2xl rotate-12 absolute -top-4 -left-4"></div>
          <div className="w-32 h-32 border-2 border-gray-400 rounded-2xl flex items-center justify-center bg-white relative z-10">
             <Camera size={48} className="text-gray-400" />
          </div>
          <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-2xl -rotate-6 absolute -bottom-4 -right-4"></div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Create your First Snapshot</h3>
        
        <div className="max-w-md space-y-4 text-sm text-gray-500 leading-relaxed">
          <p>
            Snapshots are point-in-time backups of your Node-RED Instances and capture the flows, credentials and runtime settings.
          </p>
          <p>
            Snapshots are also used for deploying to your Devices. Devices have a set &quot;Target Snapshot&quot;, which will roll out to all Devices connected to the respective Instance.
          </p>
        </div>
      </div>
    </div>
  )
}