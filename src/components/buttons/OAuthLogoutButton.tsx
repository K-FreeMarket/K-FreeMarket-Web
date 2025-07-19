'use client'

export default function OAuthLogoutButton() {
  const onLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 쿠키 포함 필수!
      })

      console.log(await response.status)
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
