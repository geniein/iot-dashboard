"use client"

import { LayoutDashboard, Users, Group, ScrollText, Bell, Layers, Monitor, Box, FileText, Settings, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AdminSidebar() {
    const router = useRouter();

    return (
        <aside className="w-64 border-r border-gray-200 bg-[#f8f9fa] h-screen flex flex-col shrink-0">
            {/* Back to Dashboard 버튼 (이미지 7171ef 참조) */}
            <div className="p-4 border-b border-gray-200">
                <button
                    onClick={() => router.push('/')}
                    className="w-full flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                    <ChevronLeft size={16} /> Back to Dashboard
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* ADMIN 섹션 */}
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 px-2">Admin</p>
                    <AdminItem icon={<LayoutDashboard size={18} />} label="Overview" isActive />
                    <AdminItem icon={<Users size={18} />} label="Users" />
                    <AdminItem icon={<Group size={18} />} label="Teams" />
                    <AdminItem icon={<ScrollText size={18} />} label="Audit Log" />
                    <AdminItem icon={<Bell size={18} />} label="Notifications Hub" />
                </div>

                {/* SETUP 섹션 */}
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 px-2">Setup</p>
                    <AdminItem icon={<Layers size={18} />} label="Team Types" />
                    <AdminItem icon={<Monitor size={18} />} label="Instance Types" />
                    <AdminItem icon={<Box size={18} />} label="Stacks" />
                    <AdminItem icon={<FileText size={18} />} label="Templates" />
                    <AdminItem icon={<Box size={18} />} label="Blueprints" badge="✨" />
                </div>

                {/* GENERAL 섹션 */}
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 px-2">General</p>
                    <AdminItem icon={<Settings size={18} />} label="Settings" />
                </div>
            </nav>
        </aside>
    )
}

function AdminItem({ icon, label, isActive, badge }: { icon: any, label: string, isActive?: boolean, badge?: string }) {
    return (
        <div className={`flex items-center justify-between px-2 py-1.5 rounded cursor-pointer transition-colors ${isActive ? 'bg-[#3b32b3] text-white' : 'text-gray-600 hover:bg-gray-200/50'
            }`}>
            <div className="flex items-center gap-3">
                <span className={isActive ? 'text-white' : 'text-gray-400'}>{icon}</span>
                <span className="text-sm font-medium">{label}</span>
            </div>
            {badge && <span className="text-xs">{badge}</span>}
        </div>
    )
}