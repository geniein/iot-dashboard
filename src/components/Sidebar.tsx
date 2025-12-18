"use client" // 클라이언트 컴포넌트 선언

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Database, LayoutGrid, Users, History, Settings, FileText, Info } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menuGroups = [
    {
      title: 'INSTANCES',
      items: [
        { icon: Database, label: 'Hosted Instances', href: '/instances/hosted' },
        { icon: Database, label: 'Remote Instances', href: '/instances/remote', badge: true },
      ]
    },
    {
      title: 'OPERATIONS',
      items: [
        { icon: LayoutGrid, label: 'Applications', href: '/operations/applications' },
        { icon: Users, label: 'Groups', href: '/operations/groups' },
        { icon: History, label: 'Pipelines', href: '/operations/pipelines' },
        { icon: FileText, label: 'Bill Of Materials', href: '/operations/bom' },
      ]
    },
    {
      title: 'TEAM ADMIN',
      items: [
        { icon: History, label: 'Audit Log', href: '/admin/audit-log' },
        { icon: Settings, label: 'Team Settings', href: '/admin/settings' },
      ]
    }
  ]

  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col gap-4 text-sm shrink-0 overflow-y-auto">
      <div className="font-bold text-2xl text-[#ef4444] px-2 mb-4">FlowFuse</div>
      
      {/* Home 버튼 */}
      <Link href="/">
        <div className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
          pathname === '/' 
          ? 'bg-[#3b3a95] text-white font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
        }`}>
          <Home size={18} /> Home
        </div>
      </Link>

      {/* 그룹별 메뉴 */}
      {menuGroups.map((group) => (
        <div key={group.title} className="mt-2">
          <p className="text-[10px] font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">{group.title}</p>
          <div className="space-y-1">
            {group.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                    isActive 
                    ? 'bg-[#3b3a95] text-white font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}>
                    <div className="flex items-center gap-2">
                      <item.icon size={18} />
                      {item.label}
                    </div>
                    {item.badge && !isActive && <Info size={14} className="text-gray-400" />}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}