import OAuthLogoutButton from '@/components/buttons/OAuthLogoutButton'
import Menu from '@/components/layouts/Menu'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex w-full items-center justify-between'>
      <Menu />
      <div className='flex gap-4'>
        <Link href={'/login'} className=''>
          Login
        </Link>
        <OAuthLogoutButton />
      </div>
    </div>
  )
}
