import { Plus, MoreVertical, Share2, Laptop, Database } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Home</h1>

      {/* 상단 인스턴스 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hosted Instances */}
        <div className="bg-white p-4 rounded-md border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="flex items-center gap-2 font-semibold text-gray-700">
              <Database size={18} /> Hosted Instances
            </h2>
            <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded text-blue-700 border-blue-700 hover:bg-blue-50">
              <Plus size={16} /> Add Instance
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
            <div className="bg-green-50 p-3 rounded">
              <p className="text-green-600">Running</p>
              <p className="text-2xl font-bold text-green-700">1</p>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <p className="text-red-400">Error</p>
              <p className="text-2xl font-bold text-red-500">0</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-gray-400">
              <p>Not Running</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="border-t pt-3 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">happy-redshank-6519</span>
             </div>
             <div className="flex gap-2 text-gray-400">
                <Share2 size={16} />
                <MoreVertical size={16} />
             </div>
          </div>
        </div>

        {/* Remote Instances */}
        <div className="bg-white p-4 rounded-md border shadow-sm text-gray-500">
          <div className="flex justify-between items-center mb-4 text-black">
            <h2 className="flex items-center gap-2 font-semibold">
              <Laptop size={18} /> Remote Instances
            </h2>
            <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded text-blue-700 border-blue-700">
              <Plus size={16} /> Add Instance
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
            <div className="bg-gray-50 p-3 rounded opacity-50"><p>Running</p><p className="text-2xl font-bold">0</p></div>
            <div className="bg-gray-50 p-3 rounded opacity-50"><p>Error</p><p className="text-2xl font-bold">0</p></div>
            <div className="bg-gray-100 p-3 rounded"><p>Not Running</p><p className="text-2xl font-bold text-black">1</p></div>
          </div>
          <div className="border-t pt-3 flex justify-between items-center text-sm">
             <div>
                <p className="font-medium text-black">11</p>
                <p className="text-xs text-gray-400">Last seen: 22 hours, 18 minutes ago</p>
             </div>
             <MoreVertical size={16} />
          </div>
        </div>
      </div>

      {/* 하단 Recent Activity */}
      <div className="bg-white rounded-md border shadow-sm">
        <div className="p-4 border-b flex items-center gap-2 font-semibold">
          <Database size={18} /> Recent Activity
        </div>
        <div className="p-4 space-y-4">
          <ActivityItem time="오전 1:08:55" title="New Device Created" desc="Device '11' has been created." />
          <ActivityItem time="오후 11:45:19" title="Device Deleted" desc="Device 'a' has been deleted." />
          <ActivityItem time="오후 11:24:41" title="Device Assigned" desc="Device 'a' has been assigned to the Application 'a'." />
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ time, title, desc }: { time: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4 text-sm items-start border-l-2 border-gray-100 pl-4 relative">
      <span className="w-2 h-2 bg-blue-500 rounded-full absolute -left-[5px] top-1"></span>
      <span className="text-gray-400 w-24">{time}</span>
      <div className="flex-1">
        <p className="font-bold text-gray-700">{title}</p>
        <p className="text-gray-500">{desc}</p>
      </div>
      <span className="text-xs text-gray-400">This Team</span>
    </div>
  )
}