// app/page.tsx
"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const isSetupDone = false; // DB 연동 전 임시 값
    if (!isSetupDone) {
      router.replace('/setup');
    }
  }, [router]);

  return null; // 리다이렉트 중에는 아무것도 보여주지 않음
}