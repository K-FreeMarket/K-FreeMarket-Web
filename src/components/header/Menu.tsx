import Link from 'next/link'

export default function Menu() {
  return (
    <div
      id='menu-box'
      aria-label='menu-box'
      className='flex w-full items-center justify-center gap-30 px-20'
    >
      <Link href='/products' className='text-xl font-medium'>
        상품
      </Link>
      <Link href='/events' className='text-xl font-medium'>
        이벤트
      </Link>
      <Link href='/question' className='text-xl font-medium'>
        Q&A
      </Link>
    </div>
  )
}
