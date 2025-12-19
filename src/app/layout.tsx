import './globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="flex bg-[#F9FAFB] min-h-screen">
                {/* 왼쪽 사이드바 */}
                <Sidebar />
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    {/* 상단 헤더 */}
                    <Header />
                    {/* 메인 콘텐츠 영역 */}
                    <main className="flex-1 overflow-y-auto p-6">
                        <div className="max-w-[1600px] mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    )
}