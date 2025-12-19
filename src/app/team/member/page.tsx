"use client"

import { Search, UserPlus, MoreVertical } from 'lucide-react'
import { useState } from 'react'

export default function MembersPage() {
    const [activeTab, setActiveTab] = useState('Team Members');

    return (
        <div className="p-6 space-y-6 animate-in fade-in duration-500">
            {/* 헤더 섹션 */}
            <div className="space-y-1">
                <h1 className="text-xl font-bold text-gray-800">Members</h1>
                <p className="text-xs text-gray-500">View and manage the members of your team.</p>
            </div>

            {/* 탭 메뉴 (이미지 675e85 참조) */}
            <div className="flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-6">
                    <TabButton
                        label="Team Members"
                        isActive={activeTab === 'Team Members'}
                        onClick={() => setActiveTab('Team Members')}
                    />
                    <TabButton
                        label="Invitations (0)"
                        isActive={activeTab === 'Invitations'}
                        onClick={() => setActiveTab('Invitations')}
                    />
                </div>
                <button className="mb-2 bg-[#3b32b3] hover:bg-[#2d2691] text-white px-3 py-1.5 rounded flex items-center gap-2 text-xs font-bold transition-colors">
                    <UserPlus size={14} />
                    Invite Members
                </button>
            </div>

            {/* 검색 바 */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search Team Members..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
            </div>

            {/* 멤버 리스트 테이블 (이미지 675e85 참조) */}
            <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
                <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase font-bold">
                        <tr>
                            <th className="px-4 py-2.5 flex items-center gap-1">User <span className="text-[10px]">↑↓</span></th>
                            <th className="px-4 py-2.5">Role <span className="text-[10px]">↑↓</span></th>
                            <th className="px-4 py-2.5 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-4 py-3 flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#8a8a4d] rounded flex items-center justify-center text-white text-xs font-bold uppercase">
                                    a
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-700">a</span>
                                    <span className="text-[10px] text-gray-400 uppercase">a</span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-600 font-medium">Owner</td>
                            <td className="px-4 py-3 text-right">
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <MoreVertical size={16} className="text-gray-400" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TabButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`pb-3 text-sm font-medium transition-colors border-b-2 px-1 ${isActive ? 'border-[#3b32b3] text-[#3b32b3]' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
        >
            {label}
        </button>
    )
}