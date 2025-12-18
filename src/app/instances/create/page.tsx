"use client"

import { useState } from 'react'
import { ArrowLeft, RefreshCw, CheckCircle2, Database, Cpu, ChevronDown, Download, Trash2, Search, Plus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CreateInstancePage() {
  const router = useRouter()
  const [step, setStep] = useState(1); 
  const [hostname, setHostname] = useState("victorious-great-grey-shrike-9341");
  const steps = ["Application", "Instance", "Flows"];

  // 마지막 단계 완료 핸들러
  const handleCreate = () => {
    alert("Loading instance page...");
    // 실제 서비스라면 여기서 API를 호출해 인스턴스를 생성하고 ID를 받아옵니다.
    const newId = hostname; 
    router.push(`/instances/${newId}`); // 생성된 ID의 상세 페이지로 이동
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">
      {/* 헤더 */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/instances/hosted" className="flex items-center gap-2 bg-[#3b3a95] text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-[#2e2d7a]">
            <ArrowLeft size={16} /> Back to Instances
          </Link>
          <div>
            <h1 className="text-sm font-bold text-gray-800">Instances</h1>
            <p className="text-[11px] text-gray-500 font-medium tracking-tight">Let&apos;s get your new Node-RED instance setup in no time.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={`px-4 py-1.5 rounded text-sm font-medium border ${step === 1 ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-indigo-600'}`}
          >
            Back
          </button>
          {step < 3 ? (
            <button 
              onClick={() => setStep(step + 1)}
              className="px-4 py-1.5 bg-[#3b3a95] text-white rounded text-sm font-medium hover:bg-[#2e2d7a]"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={handleCreate}
              className="px-4 py-1.5 bg-[#3b3a95] text-white rounded text-sm font-medium hover:bg-[#2e2d7a]"
            >
              Create Instance
            </button>
          )}
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col items-center pt-8 px-6 overflow-y-auto pb-10">
        
        {/* 스테퍼 */}
        <div className="w-full max-w-3xl mb-10 relative">
          <div className="absolute top-[8px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>
          <div 
            className="absolute top-[8px] left-0 h-[2px] bg-[#3b3a95] transition-all duration-300 z-0" 
            style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          ></div>
          <div className="relative z-10 flex justify-between">
            {steps.map((s, index) => {
              const i = index + 1;
              const isCompleted = i < step;
              const isActive = i === step;
              return (
                <div key={s} className="flex flex-col items-center w-24">
                  <div className={`w-4 h-4 rounded-full border-2 border-white ring-4 transition-colors ${
                    isActive || isCompleted ? 'bg-[#3b3a95] ring-indigo-100' : 'bg-gray-300 ring-gray-50'
                  }`}></div>
                  <span className={`mt-3 text-xs font-bold transition-colors ${
                    isActive || isCompleted ? 'text-[#3b3a95]' : 'text-gray-300'
                  }`}>{s}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Step 1: Choose Application */}
        {step === 1 && (
          <div className="w-full max-w-2xl text-center space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Choose an Application</h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Applications are used to manage and group together your Node-RED Instances and resources.
            </p>
            <div 
              onClick={() => setStep(2)}
              className="group bg-white border border-gray-200 rounded-md p-4 flex justify-between items-center hover:border-[#3b3a95] cursor-pointer transition-all shadow-sm"
            >
               <span className="text-sm font-medium text-gray-700 px-2">a</span>
               <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-bold border border-red-100">
                    <Database size={12} /> 1
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-50 text-teal-700 text-[10px] font-bold border border-teal-100">
                    <Cpu size={12} /> 0
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Step 2: Setup Your Instance (image_d8c433.png 기반) */}
        {step === 2 && (
          <div className="w-full max-w-xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-semibold text-gray-800">Setup Your Instance</h2>
            
            <div className="text-left space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={hostname}
                    onChange={(e) => setHostname(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="p-2 border border-[#3b3a95] text-[#3b3a95] rounded hover:bg-indigo-50 transition-colors">
                    <RefreshCw size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-teal-600 text-[13px] font-medium mt-2">
                   <CheckCircle2 size={16} />
                   Your instance hostname will be <span className="italic font-bold">&quot;{hostname}&quot;</span>.
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  The instance name is used to access the editor, so it must be suitable for use in a URL. It is not currently possible to rename the instance after it has been created.
                </p>
              </div>

              {/* Instance Type Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Choose your Instance Type</label>
                <div className="border-2 border-[#3b3a95] rounded-lg p-4 bg-white flex items-center gap-3 relative cursor-default shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#3b3a95] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Default</span>
                </div>
              </div>

              {/* Node-RED Version Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Node-RED Version</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Please select</option>
                    <option>v4.0.0</option>
                    <option>v3.1.0</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Flows (image_d8c875.png 기반) */}
        {step === 3 && (
          <div className="w-full max-w-6xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-xl font-semibold text-center text-gray-800">Import your own custom Node-RED flows</h2>
            
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* 왼쪽: Preview (그리드 배경) */}
              <div className="border border-gray-200 rounded-md bg-white flex flex-col relative">
                <div className="p-2 border-b text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Preview</div>
                <div 
                  className="flex-1 overflow-hidden relative"
                  style={{ 
                    backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                >
                  {/* 미리보기 하단 툴바 */}
                  <div className="absolute bottom-2 right-2 flex gap-1 bg-white border border-gray-200 p-1 rounded shadow-sm">
                    <button className="p-1 hover:bg-gray-100 text-gray-400"><Download size={14} /></button>
                    <button className="p-1 hover:bg-gray-100 text-gray-400"><Trash2 size={14} /></button>
                    <div className="w-[1px] bg-gray-200 mx-1"></div>
                    <button className="p-1 hover:bg-gray-100 text-gray-400"><Search size={14} /></button>
                    <button className="p-1 hover:bg-gray-100 text-gray-400"><Plus size={14} /></button>
                  </div>
                </div>
              </div>

              {/* 오른쪽: Add flows (입력 영역) */}
              <div className="border border-gray-200 rounded-md bg-white flex flex-col">
                <div className="p-2 border-b text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Add flows</div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
                  <div className="text-center">
                    <button className="text-indigo-600 font-bold text-sm hover:underline">Upload your flows.json file</button>
                    <p className="text-xs text-gray-400 mt-1">or</p>
                    <p className="text-xs text-gray-400">paste them in</p>
                  </div>
                  <textarea 
                    className="w-full flex-1 border border-gray-100 rounded-md p-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50/30"
                    placeholder="[{ 'id': '...', 'type': 'tab', 'label': 'Flow 1' }]"
                  />
                </div>
              </div>
            </div>

            {/* 하단 안내 정보 바 */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-md">
              <InfoBox title="Flow validation" desc="Imported flows are not checked for validity. Invalid nodes may prevent the instance from starting." />
              <InfoBox title="Third-party nodes" desc="External nodes are not installed automatically but can be added once the instance is running." />
              <InfoBox title="Credentials and secrets" desc="These are not imported with the flows but can be reconfigured after deployment." />
              <InfoBox title="Environment variables" desc="Any required variables must be manually added to your environment after the instance is set up." />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function InfoBox({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-1">
      <h4 className="text-[11px] font-bold text-gray-700">{title}</h4>
      <p className="text-[10px] text-gray-500 leading-normal italic">{desc}</p>
    </div>
  )
}