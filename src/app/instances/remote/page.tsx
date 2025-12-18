"use client";
import { 
  Search, Plus, MoreVertical, Info, ArrowUpDown, 
  Filter, ChevronDown, Monitor, Cpu, Clock, Shield 
} from 'lucide-react'
import { useState } from 'react';
import AddRemoteModal from '@/components/AddRemoteModal'

export default function RemoteInstancesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="space-y-6">
      {/* 헤더 섹션 */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Remote Instances <Info size={18} className="text-gray-400" />
        </h1>
        <p className="text-sm text-gray-500">
          FlowFuse provides infrastructure to manage your Node-RED Instances running remotely... 
          <span className="text-blue-600 cursor-pointer ml-1">FlowFuse Device Agent.</span>
        </p>
      </div>

      {/* 상단 통계 요약 가로 바 (Last Seen / Last Known Status) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatBarCard title="Last Seen" count={1} label="> 3 Mins" color="bg-red-400" />
        <StatBarCard title="Last Known Status" count={1} label="Stopped" color="bg-gray-300" />
      </div>

      {/* 필터 및 검색 컨트롤 */}
      <div className="flex justify-between items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search Remote Instances" 
            className="w-full bg-white border border-gray-200 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Filters <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 border rounded-md text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed">
            Actions <ChevronDown size={14} />
          </button>
          {/* 버튼 클릭 시 모달 열기 */}
          <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#3b3a95] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#2e2d7a]">
            <Plus size={18} /> Add Remote Instance
          </button>
        </div>
      </div>

      {/* 리모트 인스턴스 테이블 */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b font-semibold text-gray-600">
              <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded" /></th>
              <th className="px-4 py-3">Remote Instance <ArrowUpDown size={14} className="inline ml-1 opacity-30" /></th>
              <th className="px-4 py-3">Type <ArrowUpDown size={14} className="inline ml-1 opacity-30" /></th>
              <th className="px-4 py-3">Created <ArrowUpDown size={14} className="inline ml-1 opacity-30" /></th>
              <th className="px-4 py-3">Last Seen <ArrowUpDown size={14} className="inline ml-1 opacity-30" /></th>
              <th className="px-4 py-3">Mode <ArrowUpDown size={14} className="inline ml-1 opacity-30" /></th>
              <th className="px-4 py-3">Last Known Status</th>
              <th className="px-4 py-3">Assigned To</th>
              <th className="px-4 py-3">Group</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-teal-50 text-teal-600 rounded">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">11</p>
                    <p className="text-[11px] text-gray-400 font-mono">id: rGo9nv9knb</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-400">—</td>
              <td className="px-4 py-4 text-gray-600">22 hours ago</td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 text-xs font-medium">
                  <Clock size={12} /> 22 hours ago
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="flex items-center gap-1.5 text-teal-700 font-medium">
                  <Monitor size={14} /> Fleet Mode
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-dashed border-gray-300 bg-gray-50 text-gray-500 text-xs">
                  <Shield size={12} /> stopped
                </span>
              </td>
              <td className="px-4 py-4 text-gray-300 italic">Unassigned</td>
              <td className="px-4 py-4 text-gray-600">Ungrouped</td>
              <td className="px-4 py-4 text-right">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 모달 컴포넌트 연결 */}
      <AddRemoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

// 상단 통계 바 컴포넌트
function StatBarCard({ title, count, label, color }: { title: string, count: number, label: string, color: string }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm relative">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <button className="text-indigo-600"><Info size={16} /></button>
      </div>
      <div className="w-full h-8 bg-gray-100 rounded flex overflow-hidden">
        <div className={`${color} h-full flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: '100%' }}>
          {count}
        </div>
      </div>
      <div className="text-right mt-1">
        <span className="text-[11px] font-bold text-gray-500">{label}</span>
      </div>
    </div>
  )
}