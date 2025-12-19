"use client"

import { X, CheckSquare } from 'lucide-react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotificationDrawer({ isOpen, onClose }: Props) {
    return (
        <>
            {/* 배경 오버레이 (클릭 시 닫힘) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-[200] transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* 알림 패널 (오른쪽 슬라이드) */}
            <div className={`fixed right-0 top-0 h-full w-[400px] bg-white shadow-2xl z-[250] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>

                {/* 헤더 영역 (이미지 66fd49 참조) */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-[#1a202c]">Notifications</h2>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-1.5 cursor-pointer group">
                            <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white group-hover:border-indigo-500">
                                <CheckSquare size={12} className="text-indigo-600" />
                            </div>
                            <span className="text-xs text-gray-600">Hide Read</span>
                        </label>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* 액션 버튼 바 */}
                <div className="flex gap-2 px-4 py-3 border-b border-gray-50">
                    <NotificationAction label="select all" />
                    <NotificationAction label="deselect all" />
                    <NotificationAction label="mark as read" />
                    <NotificationAction label="mark as unread" />
                </div>

                {/* 빈 알림 상태 (이미지 66fd49 참조) */}
                <div className="flex flex-col items-center justify-center h-[calc(100%-120px)] text-gray-400">
                    <p className="text-sm">No unread notifications...</p>
                </div>
            </div>
        </>
    )
}

function NotificationAction({ label }: { label: string }) {
    return (
        <button className="px-2 py-1 border border-gray-200 rounded text-[10px] text-gray-400 font-medium hover:bg-gray-50 uppercase tracking-tighter">
            {label}
        </button>
    )
}