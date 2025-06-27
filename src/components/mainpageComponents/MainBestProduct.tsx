import BlackBoxImage from '@image/images/blackboxImage.png'
import Image from 'next/image'
import Link from 'next/link'

export default function MainBestProduct() {
  return (
    <div className='mt-10 w-full'>
      <h2 className='text-xl font-medium'>베스트 상품</h2>
      <hr className='mt-3 text-gray-400' />
      <div className='mt-10 grid w-full grid-cols-4 gap-5'>
        <Link
          href={'/product/detail/1'}
          className='flex h-[400px] w-full flex-col rounded-md text-base font-semibold shadow-sm'
        >
          <Image src={BlackBoxImage} alt='블랙박스' className='rounded-md object-cover' />
          <span className='mt-3 w-full px-3'>세상에서 가장 멋이고, 성능이 좋은 블랙박스 i200</span>
          <div className='flex w-full gap-4 px-3'>
            <span>15%</span>
            <span className='w-auto'>100,000</span>
            <span className='w-auto'>115,000</span>
          </div>
        </Link>
        <Link
          href={'/product/detail/1'}
          className='flex h-[400px] w-full flex-col rounded-md text-base font-semibold shadow-sm'
        >
          <Image src={BlackBoxImage} alt='블랙박스' className='rounded-md object-cover' />
          <span className='mt-3 w-full px-3'>세상에서 가장 멋이고, 성능이 좋은 블랙박스 i200</span>
          <div className='flex w-full gap-4 px-3'>
            <span>15%</span>
            <span className='w-auto'>100,000</span>
            <span className='w-auto'>115,000</span>
          </div>
        </Link>
        <Link
          href={'/product/detail/1'}
          className='flex h-[400px] w-full flex-col rounded-md text-base font-semibold shadow-sm'
        >
          <Image src={BlackBoxImage} alt='블랙박스' className='rounded-md object-cover' />
          <span className='mt-3 w-full px-3'>세상에서 가장 멋이고, 성능이 좋은 블랙박스 i200</span>
          <div className='flex w-full gap-4 px-3'>
            <span>15%</span>
            <span className='w-auto'>100,000</span>
            <span className='w-auto'>115,000</span>
          </div>
        </Link>
        <Link
          href={'/product/detail/1'}
          className='flex h-[400px] w-full flex-col rounded-md text-base font-semibold shadow-sm'
        >
          <Image src={BlackBoxImage} alt='블랙박스' className='rounded-md object-cover' />
          <span className='mt-3 w-full px-3'>세상에서 가장 멋이고, 성능이 좋은 블랙박스 i200</span>
          <div className='flex w-full gap-4 px-3'>
            <span>15%</span>
            <span className='w-auto'>100,000</span>
            <span className='w-auto'>115,000</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
