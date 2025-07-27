import HeaderRight from '@/components/header/HeaderRight'
import Menu from '@/components/header/Menu'
import Link from 'next/link'
import Logo from '@image/images/kfreemarket.png'
import Image from 'next/image'

export default function HeaderComponent() {
  return (
    <div className='row-start-1 flex h-full w-full items-center justify-between gap-16 border-b border-gray-300 px-60'>
      <Link href={'/'} className='w-50 text-start text-xl'>
        <Image src={Logo} alt='K-FreeMarket' />
      </Link>
      <Menu />

      <HeaderRight />
    </div>
  )
}
