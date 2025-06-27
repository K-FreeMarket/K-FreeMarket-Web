'use client'

import { issueAccessToken } from '@/lib/issueAccessToken'
import { useEffect } from 'react'

export default function OAuthLogoutButton() {
  useEffect(() => {
    const getToken = localStorage.getItem('accessToken')
    if (!getToken) {
      issueAccessToken()
        .then((accessToken) => {
          if (accessToken) {
            console.log('Access Token:', accessToken)
            localStorage.setItem('accessToken', accessToken)
          }
        })
        .catch((err) => {
          console.error('Access token 발급 실패:', err.message)
        })
    }
  }, [])

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

  return (
    <button
      id='logout'
      aria-label='logout'
      onClick={onLogout}
      className='block w-full px-2 py-1 text-black hover:bg-gray-100'
    >
      로그아웃
    </button>
  )
}
