import { Search, Mail, ChevronDown } from 'lucide-react'

export default function Header() {
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
        <button className="text-gray-500 hover:text-gray-700">
          <Mail size={20} />
        </button>
        <div className="w-8 h-8 bg-orange-100 text-orange-700 flex items-center justify-center rounded-full font-bold text-xs border border-orange-200">
          a
        </div>
      </div>
    </header>
  )
}