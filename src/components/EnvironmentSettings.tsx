"use client"

import { useState } from 'react'
import { Search, Import, Plus, Trash2, Eye, Lock, Save } from 'lucide-react'

interface EnvVar {
  id: string;
  name: string;
  value: string;
  isNew?: boolean;
}

export default function EnvironmentSettings() {
  // 초기 값 설정 (image_d9a973.png 기반)
  const [envVars, setEnvVars] = useState<EnvVar[]>([
    { id: '1', name: 'FF_INSTANCE_ID', value: 'a4edc378-cb53-4d42-b981-280feedd4d18' },
    { id: '2', name: 'FF_INSTANCE_NAME', value: 'victorious-great-grey-shrike-9341' },
  ]);

  // 변수 추가 함수
  const addVariable = () => {
    const newVar: EnvVar = {
      id: Date.now().toString(),
      name: '',
      value: '',
      isNew: true
    };
    setEnvVars([...envVars, newVar]);
  };

  // 변수 삭제 함수
  const removeVariable = (id: string) => {
    setEnvVars(envVars.filter(v => v.id !== id));
  };

  // 저장 함수
  const handleSave = () => {
    alert("환경 변수가 성공적으로 저장되었습니다.");
    // 실제 구현 시 여기서 API 호출을 통해 서버에 저장합니다.
    setEnvVars(envVars.map(v => ({ ...v, isNew: false })));
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* 상단 툴바 및 저장 버튼 */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Environment Variables</h2>
        <button 
          onClick={handleSave}
          className="bg-[#3b3a95] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#2e2d7a] transition-all shadow-sm flex items-center gap-2"
        >
          <Save size={14} /> Save Changes
        </button>
      </div>

      {/* 검색 및 액션 바 */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search environment variables..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 border border-indigo-600 text-indigo-600 rounded-md text-xs font-bold hover:bg-indigo-50">
          <Import size={16} /> Import .env
        </button>
        <button 
          onClick={addVariable}
          className="flex items-center gap-2 px-3 py-2 bg-[#3b3a95] text-white rounded-md text-xs font-bold hover:bg-[#2e2d7a]"
        >
          <Plus size={16} /> Add variable
        </button>
      </div>

      {/* 변수 리스트 테이블 */}
      <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <th className="px-4 py-3 w-1/3">Name</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3 w-20 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {envVars.map((v) => (
              <tr key={v.id} className="group hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3">
                  {v.isNew ? (
                    <input 
                      autoFocus
                      className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                      placeholder="NEW_VARIABLE_NAME"
                      defaultValue={v.name}
                    />
                  ) : (
                    <span className="text-xs font-mono text-gray-600">{v.name}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    {v.isNew ? (
                      <textarea 
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-500 outline-none min-h-[32px] resize-none"
                        placeholder="Value"
                        defaultValue={v.value}
                      />
                    ) : (
                      <span className="text-xs font-mono text-gray-500 truncate max-w-md">{v.value}</span>
                    )}
                    {!v.isNew && <Lock size={14} className="text-gray-300" />}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    {v.isNew ? (
                      <>
                        <button onClick={() => removeVariable(v.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded">
                          <Trash2 size={14} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded">
                          <Eye size={14} />
                        </button>
                      </>
                    ) : (
                      <Lock size={14} className="text-gray-200" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}