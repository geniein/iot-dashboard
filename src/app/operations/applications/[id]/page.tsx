"use client"

import { useState } from 'react'
import { Search, Plus, ExternalLink, MoreVertical, Info } from 'lucide-react'

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('Hosted Instances');

    return (
        <div className="p-6 animate-in fade-in duration-500">
            {/* 브레드크럼 및 헤더 */}
            <div className="mb-6">
                <nav className="flex text-sm text-indigo-600 font-medium mb-1">
                    <span className="cursor-pointer hover:underline">Applications</span>
                    <span className="mx-2 text-gray-400 font-normal">&gt;</span>
                    <span className="text-gray-900">{params.id}</span>
                </nav>
            </div>

            {/* 탭 메뉴 (이미지 67790b 참조) */}
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
                {['Hosted Instances', 'Remote Instances', 'Device Groups', 'Snapshots', 'Pipelines', 'Logs', 'Audit Log', 'Dependencies', 'Settings'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab}
                        {['Device Groups', 'Pipelines'].includes(tab) && <span className="ml-1 text-[10px]">✨</span>}
                    </button>
                ))}
            </div>

            {/* 탭 콘텐츠 영역 - Hosted Instances (이미지 67790b 참조) */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <h2 className="text-sm font-bold text-gray-800">Node-RED Instances</h2>
                        <Info size={14} className="text-gray-400" />
                        <span>Hosted instances of Node-RED, owned by this application.</span>
                    </div>
                    <button className="flex items-center gap-2 bg-[#3b3a95] text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-[#2e2d7a]">
                        <Plus size={14} /> Add Instance
                    </button>
                </div>

                {/* 검색 바 */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search Instances"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                </div>

                {/* 인스턴스 리스트 테이블 (이미지 67790b 참조) */}
                <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-bold uppercase">
                            <tr>
                                <th className="px-4 py-2.5">Name</th>
                                <th className="px-4 py-2.5">Instance Status</th>
                                <th className="px-4 py-2.5">Last Deployed</th>
                                <th className="px-4 py-2.5 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <div className="w-6 h-6 bg-red-800 rounded flex items-center justify-center">
                                        <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45"></div>
                                    </div>
                                    <span className="font-bold text-gray-700">victorious-great-grey-shrike-9341</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        running
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-500">21 hours, 58 minutes ago</td>
                                <td className="px-4 py-3 flex items-center gap-2 justify-end">
                                    <button className="flex items-center gap-1.5 px-3 py-1 border border-indigo-600 text-indigo-600 rounded font-bold hover:bg-indigo-50">
                                        <ExternalLink size={14} /> Open Editor
                                    </button>
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <MoreVertical size={16} className="text-gray-400" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}