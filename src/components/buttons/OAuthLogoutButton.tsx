'use client'

export default function OAuthLogoutButton() {
  const onLogout = async () => {
    await fetch('http://localhost:8080/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // 쿠키 포함 필수!
    })

    // 로그아웃 후 리디렉션 또는 상태 초기화
    window.location.href = '/'
  }

  return (
    <button id='logout' aria-label='logout' onClick={onLogout}>
      Logout
    </button>
  )
}
