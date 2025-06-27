import Link from 'next/link'

export default function Menu() {
  return (
    <div
      id='menu-box'
      aria-label='menu-box'
      className='flex w-full items-center justify-center gap-30 px-20'
    >
      <Link href='/product' className='text-xl font-medium'>
        상품
      </Link>
      <Link href='/question' className='text-xl font-medium'>
        Q&A
      </Link>
      <Link href='/event' className='text-xl font-medium'>
        이벤트
      </Link>
      <Link href='/product/detail/1' className='text-xl font-medium'>
        detail 페이지
      </Link>
    </div>
  )
}
