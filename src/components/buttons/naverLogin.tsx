'use client'
export default function NaverLoginButton() {
  const onNaverLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/naver'
  }
  return (
    <button aria-label='naver-login' id='naver-login' onClick={onNaverLogin}>
      네이버 로그인
    </button>
  )
}
