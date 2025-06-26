'use client'

import { issueAccessToken } from '@/lib/issueAccessToken'
import { useEffect } from 'react'

export default function OAuthLogoutButton() {
  const onLogout = async () => {
    try {
      await fetch('/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키 포함 필수!
      })

      localStorage.removeItem('accessToken')
    } catch (error: unknown) {
      console.error('에러가 발생했습니다.', error)
    }

    // 로그아웃 후 리디렉션 또는 상태 초기화
    window.location.href = '/'
  }

  useEffect(() => {
    issueAccessToken().then((accessToken) => {
      if (accessToken) {
        console.log('Access Token:', accessToken)
        localStorage.setItem('accessToken', accessToken)
      } else {
        // Access token 없음 (정상 흐름일 수 있음)
      }
    })
  }, [])
  return (
    <button id='logout' aria-label='logout' onClick={onLogout} className=''>
      Logout
    </button>
  )
}
