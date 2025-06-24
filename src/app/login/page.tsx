import GoogleLoginButton from '@/components/buttons/googleLogin'
import KakaoLoginButton from '@/components/buttons/kakaoLogin'
import NaverLoginButton from '@/components/buttons/naverLogin'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-2xl'>Login</h1>
      <div className='flex items-center justify-center gap-4'>
        <NaverLoginButton />
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  )
}
