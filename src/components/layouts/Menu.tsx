import Link from 'next/link'

export default function Menu() {
  return (
    <div id='menu-box' aria-label='menu-box' className='flex items-center justify-center'>
      <Link href='/admin'>관리자 페이지</Link>
    </div>
  )
}
