'use client'
export default function GoogleLoginButton() {
  const onGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
  }
  return (
    <button id='google-login' aria-label='google-login' onClick={onGoogleLogin}>
      구글 로그인
    </button>
  )
}
