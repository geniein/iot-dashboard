"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateAdminPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // 모든 필드가 채워졌는지 확인 (NEXT 버튼 활성화 조건)
  const isFormValid = Object.values(formData).every(val => val.length > 0) && 
                      formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-[#fdfdfd] flex flex-col items-center pt-20 p-4">
      <div className="w-full max-w-[440px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* ingenie 로고 (이미지 5954fb 참조) */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="w-10 h-10 bg-[#e05338] rounded-sm flex items-center justify-center">
            <div className="w-6 h-1 border-t-4 border-white -rotate-45 relative top-1"></div>
            <div className="w-6 h-1 border-t-4 border-white rotate-45 relative -top-1"></div>
          </div>
          <span className="text-3xl font-extrabold text-[#e05338] tracking-tight">ingenie</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-700 border-b border-gray-100 pb-2">
            1. Create Administrator User
          </h2>

          <div className="space-y-5">
            {/* Username */}
            <InputGroup 
              label="Username" 
              subLabel="Unique, short, no spaces. Cannot be 'admin' or 'root'"
              value={formData.username}
              onChange={(v: string) => setFormData({...formData, username: v})}
            />

            {/* Full Name */}
            <InputGroup 
              label="Full Name" 
              value={formData.fullName}
              onChange={(v: string) => setFormData({...formData, fullName: v})}
            />

            {/* Email + 경고 메시지 */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600">Email</label>
              <p className="text-[11px] text-red-500 leading-relaxed">
                Email has not been configured. This will limit available features, such as inviting users to the platform. Check the documentation for how to configure email before running this setup.
              </p>
              <input 
                type="email"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Password */}
            <InputGroup 
              label="Password" 
              subLabel="At least 8 characters"
              type="password"
              value={formData.password}
              onChange={(v: string) => setFormData({...formData, password: v})}
            />

            {/* Confirm Password */}
            <InputGroup 
              label="Confirm Password" 
              type="password"
              value={formData.confirmPassword}
              onChange={(v: string) => setFormData({...formData, confirmPassword: v})}
            />
          </div>

          {/* NEXT 버튼 (이미지 5954fb 참조) */}
          <button
            disabled={!isFormValid}
            onClick={() => router.push('/setup/complete')}
            className={`w-full py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-colors ${
              isFormValid 
              ? 'bg-[#5751e5] text-white hover:bg-[#4640d4]' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

// 재사용 가능한 입력 필드 컴포넌트
function InputGroup({ label, subLabel, type = "text", value, onChange }: any) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-gray-600">{label}</label>
      {subLabel && <p className="text-[11px] text-gray-400">{subLabel}</p>}
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow"
      />
    </div>
  )
}