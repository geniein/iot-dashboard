import { Search, Plus, ExternalLink, MoreVertical, Info, ArrowUpDown, ListFilter } from 'lucide-react'
import Link from 'next/link'

export default function HostedInstancesPage() {
  return (
    <div className="space-y-6">
      {/* 페이지 타이틀 섹션 */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Hosted Instances <Info size={18} className="text-gray-400 cursor-pointer" />
        </h1>
        <p className="text-sm text-gray-500">A list of all dashboards belonging to this Team.</p>
      </div>

      {/* 필터 및 액션 버튼 영역 */}
      <div className="flex justify-between items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search Instances..." 
            className="w-full bg-white border border-gray-200 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        {/* app/instances/hosted/page.tsx 내 버튼 부분 */}
        <Link href="/instances/create">
            <button className="bg-[#3b3a95] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#2e2d7a] transition-colors">
            <Plus size={18} /> Create Instance
            </button>
        </Link>
      </div>

      {/* 인스턴스 리스트 테이블 */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-sm font-semibold text-gray-600">
              <th className="px-6 py-3 w-2/5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Name <ArrowUpDown size={14} className="text-gray-300" />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Status <ArrowUpDown size={14} className="text-gray-300" />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Application <ArrowUpDown size={14} className="text-gray-300" />
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-100/50">
                <div className="flex items-center justify-between">
                   Last Updated <ListFilter size={14} />
                </div>
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {/* Node-RED 스타일 아이콘 보완 */}
                  <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5 p-1">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">happy-redshank-6519</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  running
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">a</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <button className="flex items-center gap-1.5 border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md font-medium text-xs hover:bg-indigo-50 transition-colors">
                    <ExternalLink size={14} /> Open Editor
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}