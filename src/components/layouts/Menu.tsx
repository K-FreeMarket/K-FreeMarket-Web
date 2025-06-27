import Link from 'next/link'

export default function Menu() {
  return (
    <div id='menu-box' aria-label='menu-box' className='flex items-center justify-center gap-4'>
      <Link href={'/'}>Home</Link>
      <Link href='/product'>상품</Link>
      <Link href='/question'>Q&A</Link>
      <Link href='/admin'>관리자 페이지</Link>
    </div>
  )
}
