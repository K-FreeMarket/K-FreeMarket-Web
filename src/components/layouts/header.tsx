import OAuthLogoutButton from '@/components/buttons/OAuthLogoutButton'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
      <Link href={'/login'}>Login</Link>
      <OAuthLogoutButton />
    </div>
  )
}
