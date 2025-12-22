"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SetupPage() {
  const router = useRouter();

  const handleStartSetup = () => {
    // 실제 구현 시에는 여기서 초기 설정 로직을 실행하거나 
    // 다음 단계(계정 생성 등)로 이동합니다.
    router.push('/setup/admin'); 
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center space-y-8 animate-in fade-in zoom-in duration-700">
        
        {/* FlowFuse 로고 (이미지 58f768 참조) */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#e05338] rounded-sm flex items-center justify-center">
            <div className="w-6 h-1 border-t-4 border-white -rotate-45 relative top-1"></div>
            <div className="w-6 h-1 border-t-4 border-white rotate-45 relative -top-1"></div>
          </div>
          <span className="text-3xl font-extrabold text-[#e05338] tracking-tight">FlowFuse</span>
        </div>

        {/* 환영 문구 (이미지 58f768 참조) */}
        <div className="text-center space-y-2">
          <h1 className="text-sm text-gray-600 font-medium">
            Welcome to your shiny new FlowFuse platform.
          </h1>
          <p className="text-sm text-gray-500">
            Let's get it setup for you to start using.
          </p>
        </div>

        {/* START SETUP 버튼 (이미지 58f768 참조) */}
        <button
          onClick={handleStartSetup}
          className="w-full max-w-xs bg-[#5751e5] hover:bg-[#4640d4] text-white py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
        >
          Start Setup
        </button>
      </div>
    </div>
  )
}