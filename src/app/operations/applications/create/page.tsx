"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

export default function CreateApplicationPage() {
    const router = useRouter();
    const [appName, setAppName] = useState("");
    const [appDescription, setAppDescription] = useState("");

    const handleCreate = () => {
        if (appName) {
            // 실제로는 여기서 DB(SQLite) 저장 로직이 수행됩니다.
            // 성공 후 생성된 애플리케이션의 상세 페이지로 이동
            router.push(`/operations/applications/${appName}`);
        }
    }

    return (
        <div className="flex h-screen bg-white">
            {/* 왼쪽 사이드바 (Back 버튼) */}
            <div className="w-64 border-r border-gray-200 p-4">
                <button
                    onClick={() => router.push('/operations/applications')}
                    className="w-full flex items-center justify-center gap-2 bg-[#3b3a95] text-white py-2 rounded text-sm font-bold hover:bg-[#2e2d7a] transition-colors"
                >
                    <ChevronLeft size={16} /> Back to Dashboard
                </button>
            </div>

            {/* 메인 콘텐츠 영역 */}
            <div className="flex-1 flex flex-col">
                {/* 상단 헤더 */}
                <div className="px-8 py-4 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h1 className="text-lg font-bold text-gray-800">Create a new Application</h1>
                        <p className="text-xs text-gray-500">Applications are used to manage and group together your Node-RED instances.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-gray-100 text-gray-400 rounded text-xs font-bold cursor-not-allowed">Back</button>
                        <button
                            onClick={handleCreate}
                            disabled={!appName}
                            className={`px-4 py-1.5 rounded text-xs font-bold transition-colors ${appName ? 'bg-[#3b3a95] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Create Application
                        </button>
                    </div>
                </div>

                {/* 중앙 폼 영역 (이미지 676abf 참조) */}
                <div className="flex-1 flex flex-col items-center pt-12">
                    {/* 스텝 표시 */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-3 h-3 bg-[#4f46e5] rounded-full mb-2"></div>
                        <span className="text-[11px] font-bold text-[#4f46e5]">Application</span>
                    </div>

                    <div className="w-full max-w-md space-y-6">
                        <h2 className="text-xl font-medium text-center text-gray-800 mb-8">Create an Application</h2>

                        <p className="text-[13px] text-center text-gray-500 mb-6">
                            Applications are used to manage and group together your Node-RED instances.
                        </p>

                        {/* 입력 필드 */}
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600">Application Name</label>
                                <input
                                    type="text"
                                    value={appName}
                                    onChange={(e) => setAppName(e.target.value)}
                                    placeholder="Application Name"
                                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600">Application Description</label>
                                <textarea
                                    value={appDescription}
                                    onChange={(e) => setAppDescription(e.target.value)}
                                    placeholder="Application Description"
                                    rows={3}
                                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                                />
                            </div>

                            {/* 체크박스 옵션 */}
                            <label className="flex items-start gap-2 cursor-pointer group pt-2">
                                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-0" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-gray-700">Create Node-RED Instance</span>
                                    <span className="text-[11px] text-gray-400">This will create an instance of Node-RED that will be managed in your new Application.</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}