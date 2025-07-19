'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { issueAccessToken } from '@/lib/issueAccessToken'

export function useHandleOAuthRedirect() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const shouldTry = params.get('access') === 'true'
    if (!shouldTry) return

    const getAccess = async () => {
      const token = await issueAccessToken()
      if (token) {
        localStorage.setItem('accessToken', token)
        router.replace('/') // 쿼리 제거 + 홈으로 이동
      } else {
        console.error('Access token 발급 실패')
      }
    }

    getAccess()
  }, [router])
}
