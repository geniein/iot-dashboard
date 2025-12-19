"use client"

import { Search, Mail, ChevronDown } from 'lucide-react'
import ProfileDropdown from './ProfileDropdown'
import NotificationDrawer from './NotificationDrawer'
import { useState } from 'react';

export default function Header() {
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      {/* 검색 바 */}
      <div className="relative w-1/2 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search through your team (CTRL + K)"
          className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* 우측 아이콘 세션 */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end border-r pr-4">
          <span className="text-[10px] text-gray-400 font-bold leading-none">TEAM:</span>
          <div className="flex items-center gap-1 text-sm font-medium">
            a <ChevronDown size={14} />
          </div>
        </div>
        {/* 알림 버튼 */}
        <button
          onClick={() => setIsNotiOpen(true)}
          className="p-1.5 text-gray-500 hover:bg-gray-100 rounded transition-colors relative"
        >
          <Mail size={20} />
          {/* 읽지 않은 알림이 있을 경우 점 표시 (선택사항) */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <ProfileDropdown />
      </div>

      {/* 알림 슬라이드 패널 */}
      <NotificationDrawer
        isOpen={isNotiOpen}
        onClose={() => setIsNotiOpen(false)}
      />
    </header>
  )
}