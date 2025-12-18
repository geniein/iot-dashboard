"use client"

import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddRemoteModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
      <div className="bg-white w-full max-w-lg rounded-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* 모달 헤더 */}
        <div className="bg-[#1a202c] px-4 py-3 flex justify-between items-center">
          <h2 className="text-white text-sm font-bold">Add Remote Instance</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* 모달 바디 */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-gray-600 leading-relaxed">
            Remote Instances are managed using the <span className="text-blue-500 cursor-pointer hover:underline">FlowFuse Device Agent</span>. 
            The agent will need to be setup on the hardware where you want your Remote Instance to run.
          </p>

          {/* Name Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Name</label>
            <p className="text-[11px] text-gray-400">Provide a unique, identifiable name for your Remote Instance.</p>
            <input 
              type="text" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="e.g. Factory-Gateway-01"
            />
          </div>

          {/* Type Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Type</label>
            <p className="text-[11px] text-gray-400">Use this field to better identify your Remote Instance.</p>
            <input 
              type="text" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Application Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Application</label>
            <p className="text-[11px] text-gray-400">Assign the Remote Instance to an Application (recommended).</p>
            <select className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white">
              <option>Select an application</option>
              <option value="a">a</option>
            </select>
          </div>
        </div>

        {/* 모달 푸터 (버튼) */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-2 border-t border-gray-100">
          <button 
            onClick={onClose}
            className="px-4 py-1.5 border border-indigo-600 text-indigo-600 rounded text-sm font-bold hover:bg-indigo-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            disabled 
            className="px-6 py-1.5 bg-gray-200 text-gray-400 rounded text-sm font-bold cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}