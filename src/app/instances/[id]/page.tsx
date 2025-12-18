"use client"
import { useState } from 'react'
import Overview from '@/components/Overview' // 이전 응답의 Overview 영역
import VersionHistory from '@/components/VersionHistory'
import { ExternalLink, Settings, MoreVertical, Play, Info as InfoIcon, Activity, Database, Clock, Shield, Globe } from 'lucide-react'
import InstanceSettings from '@/components/InstanceSettings'

export default function InstanceDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Devices", "Version History", "Assets", "Audit Log", "Node-RED Logs", "Performance", "Settings"];

  return (
    <div className="space-y-6">
      {/* 헤더 생략 (이전 코드와 동일) */}
 {/* 상단 헤더 섹션 */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="font-bold text-indigo-600 cursor-pointer">Instances</span>
            <span>&gt;</span>
            <span className="font-bold text-gray-800">{params.id}</span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> running
            </span>
          </div>
          <p className="text-xs text-gray-400">Application: <span className="text-indigo-600 font-medium">a</span></p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md text-sm font-bold hover:bg-indigo-50">
            <ExternalLink size={16} /> Open Editor
          </button>
          <button className="flex items-center gap-2 bg-[#3b3a95] text-white px-3 py-1.5 rounded-md text-sm font-bold hover:bg-[#2e2d7a]">
            <Settings size={16} /> Actions 
            {/* <ChevronDown size={14} /> */}
          </button>
        </div>
      </div>
      {/* 탭 메뉴 */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[2px] ${
              activeTab === tab 
              ? 'border-indigo-600 text-indigo-600' 
              : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 내용 분기 처리 */}
      <div className="mt-6">
        {activeTab === "Overview" && <Overview id={params.id} />}
        {activeTab === "Version History" && <VersionHistory />}
        {activeTab === "Settings" && <InstanceSettings instanceId={params.id} />}
        {/* 다른 탭은 필요시 추가 */}
      </div>
    </div>
  )
}