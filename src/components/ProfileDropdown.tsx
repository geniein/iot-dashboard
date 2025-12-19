"use client"

import { useState, useRef, useEffect } from 'react'
import { Settings, Sliders, HelpCircle, GraduationCap, MousePointer2, LogOut, ChevronDown } from 'lucide-react'

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 시 닫기 로직
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* 프로필 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none"
            >
                <div className="w-8 h-8 bg-[#8a8a4d] rounded flex items-center justify-center text-white text-xs font-bold uppercase hover:opacity-90 transition-opacity">
                    a
                </div>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* 드롭다운 메뉴 (이미지 66f5c9 참조) */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-xl z-[200] py-1 animate-in fade-in zoom-in-95 duration-100">
                    <DropdownItem icon={<Settings size={16} />} label="User Settings" />
                    <DropdownItem icon={<Sliders size={16} />} label="Admin Settings" />
                    <div className="border-t border-gray-100 my-1"></div>
                    <DropdownItem icon={<HelpCircle size={16} />} label="Documentation" />
                    <DropdownItem icon={<GraduationCap size={16} />} label="Getting Started" />
                    <DropdownItem icon={<MousePointer2 size={16} />} label="Welcome Tour" />
                    <div className="border-t border-gray-100 my-1"></div>
                    <DropdownItem
                        icon={<LogOut size={16} className="text-red-600" />}
                        label="Sign Out"
                        isDanger
                    />
                </div>
            )}
        </div>
    )
}

function DropdownItem({ icon, label, isDanger }: { icon: React.ReactNode, label: string, isDanger?: boolean }) {
    return (
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <span className="text-gray-400">{icon}</span>
            <span className={`font-medium ${isDanger ? 'text-red-600' : 'text-gray-700'}`}>{label}</span>
        </button>
    )
}