"use client"

import { Search, ChevronDown, Trash2, PlusCircle, Laptop, User } from 'lucide-react'

export default function AuditLogPage() {
    return (
        <div className="flex gap-6 p-6 animate-in fade-in duration-500">
            {/* 왼쪽: 메인 로그 타임라인 */}
            <div className="flex-1 space-y-6">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Audit Log</h1>
                    <p className="text-xs text-gray-500">Detailed recording of all activity at the team-level.</p>
                </div>

                {/* 날짜별 그룹 (Fri Dec 19 2025) */}
                <LogGroup date="Fri Dec 19 2025" eventCount={5}>
                    <LogItem
                        time="오전 12:59:55"
                        icon={<Trash2 size={14} className="text-red-500" />}
                        event="Instance Deleted"
                        desc="Instance happy-redshank-6519 was deleted in Team 'a'"
                        target="This Team"
                    />
                    <LogItem
                        time="오전 12:59:12"
                        icon={<Trash2 size={14} className="text-blue-500" />}
                        event="Device Deleted"
                        desc="Device 'a' has been deleted."
                        target="This Team"
                    />
                    <LogItem
                        time="오전 12:13:22"
                        icon={<PlusCircle size={14} className="text-red-500" />}
                        event="Instance Created"
                        desc="Instance victorious-great-grey-shrike-9341 was created in Team 'a'"
                        target="victorious-great-..."
                    />
                </LogGroup>

                <LogGroup date="Thu Dec 18 2025" eventCount={1}>
                    <LogItem
                        time="오전 1:08:55"
                        icon={<Laptop size={14} className="text-blue-500" />}
                        event="New Device Created"
                        desc="Device '11' has been created."
                        target="This Team"
                    />
                </LogGroup>
            </div>

            {/* 오른쪽: 필터 사이드바 (이미지 675aa5 참조) */}
            <aside className="w-64 space-y-6 shrink-0">
                <h3 className="text-sm font-bold text-gray-700">Filters</h3>

                <FilterSelect label="Event Scope:" options={["Team"]} hasCheckbox />
                <FilterSelect label="Event Type:" options={["Show All"]} />
                <FilterSelect label="User:" options={["Show All"]} />
            </aside>
        </div>
    )
}

// 로그 그룹 컴포넌트
function LogGroup({ date, eventCount, children }: { date: string, eventCount: number, children: React.ReactNode }) {
    return (
        <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <span className="text-xs font-bold text-gray-600">{date}</span>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 font-medium">{eventCount} Events</span>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
            </div>
            <div className="divide-y divide-gray-50">
                {children}
            </div>
        </div>
    )
}

// 개별 로그 아이템 컴포넌트
function LogItem({ time, icon, event, desc, target }: { time: string, icon: any, event: string, desc: string, target: string }) {
    return (
        <div className="flex items-center px-4 py-3 hover:bg-gray-50/50 transition-colors">
            <span className="w-24 text-[11px] text-gray-400 shrink-0">{time}</span>
            <div className="mr-3">{icon}</div>
            <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-bold text-gray-700 leading-tight">{event}</h4>
                <p className="text-[11px] text-gray-400 truncate">{desc}</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 text-[11px] text-gray-500 bg-gray-50 rounded py-1 ml-4 border border-gray-100">
                <User size={12} className="text-gray-400" />
                <span>{target}</span>
                <span className="text-gray-300">a</span>
            </div>
        </div>
    )
}

// 필터 셀렉트 컴포넌트
function FilterSelect({ label, options, hasCheckbox }: { label: string, options: string[], hasCheckbox?: boolean }) {
    return (
        <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">{label}</label>
            <div className="relative">
                <select className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none">
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {hasCheckbox && (
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded border-gray-300 text-indigo-600 focus:ring-0" />
                    <span className="text-[11px] text-gray-600">Applications, Instances and Devices</span>
                </label>
            )}
        </div>
    )
}