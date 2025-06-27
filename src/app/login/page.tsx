import GoogleLoginButton from '@/components/buttons/GoogleLogin'
// import KakaoLoginButton from '@/components/buttons/KakaoLogin'
import NaverLoginButton from '@/components/buttons/NaverLogin'

export default function LoginPage() {
  return (
    <main className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-2xl font-bold'>로그인</h1>
      <p>
        아이디와 비밀번호 입력하지 마세요.
        <br />
        간편하게 회원가입해서 로그인 하세요.
      </p>

      <div className='flex items-center justify-center gap-4'>
        <NaverLoginButton />
        {/* <KakaoLoginButton /> */}
        <GoogleLoginButton />
      </div>
    </main>
  )
}
