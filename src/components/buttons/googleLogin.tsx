'use client'

import GoogleLoginImage from '@image/icons/web_light_rd_na.svg'

export default function GoogleLoginButton() {
  const onGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
  }
  return (
    <button
      id='google-login'
      aria-label='google-login'
      onClick={onGoogleLogin}
      className='cursor-pointer'
    >
      <GoogleLoginImage className='h-10 w-10' />
    </button>
  )
}
