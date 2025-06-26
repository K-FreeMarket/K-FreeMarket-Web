'use client'

export default function OAuthLogoutButton() {
  const onLogout = async () => {
    try {
      await fetch('/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키 포함 필수!
      })
      alert('성공적인 응답')
    } catch (error: unknown) {
      console.error('에러가 발생했습니다.', error)
    }

    // 로그아웃 후 리디렉션 또는 상태 초기화
    window.location.href = '/'
  }

  return (
    <button id='logout' aria-label='logout' onClick={onLogout} className=''>
      Logout
    </button>
  )
}
