import { Search, Plus, Info, LayoutGrid, Database, Laptop, Clock, AlertCircle, Activity } from 'lucide-react'

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 섹션 */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Applications <Info size={18} className="text-gray-400" />
          </h1>
          <p className="text-sm text-gray-500">View all of your Node-RED instances.</p>
        </div>
        <button className="bg-[#3b3a95] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#2e2d7a]">
          <Plus size={18} /> Create Application
        </button>
      </div>

      {/* 검색 바 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input 
          type="text" 
          placeholder="Search Applications, Instances and Devices..." 
          className="w-full bg-white border border-gray-200 rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* 애플리케이션 카드 리스트 */}
      <div className="space-y-4">
        <ApplicationCard name="a" hostedCount={1} />
      </div>
    </div>
  )
}

function ApplicationCard({ name, hostedCount }: { name: string, hostedCount: number }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      {/* 카드 상단 헤더 */}
      <div className="px-4 py-3 border-b flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <LayoutGrid size={20} className="text-gray-600" />
          <span className="font-bold text-gray-800">{name}</span>
        </div>
        {/* 우측 상태 배지들 */}
        <div className="flex gap-1">
          <StatusIconBadge icon={Activity} count={1} color="text-red-600" bgColor="bg-red-50" />
          <StatusIconBadge icon={Database} count={0} color="text-teal-600" bgColor="bg-teal-50" />
          <StatusIconBadge icon={Laptop} count={0} color="text-teal-600" bgColor="bg-teal-50" />
          <StatusIconBadge icon={Clock} count={0} color="text-teal-600" bgColor="bg-teal-50" />
          <StatusIconBadge icon={Activity} count={0} color="text-teal-600" bgColor="bg-teal-50" />
        </div>
      </div>

      {/* 카드 내부 콘텐츠 섹션 (Hosted vs Remote) */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x h-full">
        {/* Hosted Instances 섹션 */}
        <div className="flex-1 p-6 relative">
          <div className="absolute top-0 left-0 right-0 flex items-center px-4 -translate-y-1/2">
             <span className="bg-white px-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Hosted Instances</span>
             <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-2">
            <StatBox label="Running" value={hostedCount} color="text-green-600" bgColor="bg-green-50" />
            <StatBox label="Error" value={0} color="text-red-400" bgColor="bg-gray-50/50" />
            <StatBox label="Not Running" value={0} color="text-gray-300" bgColor="bg-gray-50/50" />
          </div>
        </div>

        {/* Remote Instances 섹션 */}
        <div className="flex-1 p-6 relative flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 flex items-center px-4 -translate-y-1/2">
             <span className="bg-white px-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Remote Instances</span>
             <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>
          
          <p className="text-sm text-gray-400">
            This Application currently has no <span className="text-blue-600 cursor-pointer hover:underline">attached Remote Instances.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// 작은 아이콘 배지 컴포넌트
function StatusIconBadge({ icon: Icon, count, color, bgColor }: any) {
  return (
    <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border border-gray-100 ${bgColor} ${color}`}>
      <Icon size={14} />
      <span className="text-xs font-bold leading-none">{count}</span>
    </div>
  )
}

// 상태 박스 컴포넌트
function StatBox({ label, value, color, bgColor }: { label: string, value: number, color: string, bgColor: string }) {
  return (
    <div className={`${bgColor} rounded-md p-3`}>
      <p className={`text-xs font-semibold ${color}`}>{label}</p>
      <p className={`text-3xl font-bold mt-1 ${value === 0 ? 'text-gray-200' : color}`}>{value}</p>
    </div>
  )
}