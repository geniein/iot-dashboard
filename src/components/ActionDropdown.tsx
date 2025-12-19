"use client"

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MoreVertical } from 'lucide-react'

export default function InstanceActionDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 }); // 드롭다운 위치 상태
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            // 버튼 바로 아래에 나타나도록 좌표 계산
            setCoords({
                top: rect.bottom + window.scrollY,
                left: rect.right + window.scrollX - 128 // w-32 (128px) 너비만큼 왼쪽으로 이동
            });
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // 드롭다운 메뉴 내용을 별도 변수로 관리
    const dropdownContent = (
        <div
            ref={dropdownRef}
            style={{
                position: 'absolute',
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                zIndex: 9999 // 최상단에 노출
            }}
            className="w-32 bg-white border border-gray-200 rounded shadow-lg py-1 animate-in fade-in zoom-in-95 duration-75"
        >
            <button disabled className="w-full text-left px-4 py-2 text-sm text-gray-300 cursor-not-allowed">Start</button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Restart</button>
            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">Suspend</button>
            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">Delete</button>
        </div>
    );

    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
                <MoreVertical size={18} className="text-blue-600" />
            </button>

            {/* 클라이언트 사이드에서만 포털 렌더링 */}
            {isOpen && typeof document !== 'undefined' && createPortal(dropdownContent, document.body)}
        </>
    )
}