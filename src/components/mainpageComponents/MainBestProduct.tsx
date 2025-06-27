import BlackBoxImage from '@image/images/blackboxImage.png'
import Image from 'next/image'
import Link from 'next/link'

export default function MainBestProduct() {
  return (
    <div className='mt-5 w-full'>
      <h2 className='text-xl font-medium'>베스트 상품</h2>
      <hr className='mt-2 text-gray-400' />
      <div className='mt-10 grid w-full grid-cols-4 gap-10'>
        <Link
          href={'/product/detail/1'}
          className='flex h-auto w-full flex-col rounded-md text-base font-semibold'
        >
          <Image src={BlackBoxImage} alt='블랙박스' className='rounded-md object-cover' />
          <div className='mt-5 flex flex-col gap-2 px-3'>
            <p className='flex-grow flex-wrap leading-snug font-bold'>
              세상에서 가장 멋이고, 성능이 좋은 블랙박스
            </p>
            <div className='flex w-full gap-4'>
              <span className='font-bold text-red-500'>15%</span>
              <span className='w-auto'>100,000원</span>
              <span className='w-auto line-through opacity-50'>115,000원</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
