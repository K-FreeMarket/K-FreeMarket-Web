import GoogleLoginButton from '@/components/buttons/GoogleLogin'
import KakaoLoginButton from '@/components/buttons/KakaoLogin'
import NaverLoginButton from '@/components/buttons/NaverLogin'

export default function LoginPage() {
  return (
    <main className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-2xl'>Login</h1>
      <div className='flex items-center justify-center gap-4'>
        <NaverLoginButton />
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </main>
  )
}
