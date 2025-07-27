'use client'

import Image from 'next/image'

import NaverLoginWhiteImage from '@image/images/btnG.png'

export default function NaverLoginButton() {
  const onNaverLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/naver'
  }

  return (
    <button
      aria-label='naver-login'
      id='naver-login'
      onClick={onNaverLogin}
      className='cursor-pointer'
    >
      <Image src={NaverLoginWhiteImage} alt='네이버 이미지' height={40} width={40} loading='lazy' />
    </button>
  )
}
