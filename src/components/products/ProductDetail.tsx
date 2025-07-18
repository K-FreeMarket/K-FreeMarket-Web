import Image from 'next/image'
import BlackBoxImage from '@image/images/blackboxImage.png'
import BlackBoxImage2 from '@image/images/blackboxImage2.png'
import ProductImageGallery from '@/components/products/detail/ProductImageGallery'
interface ProductDetailProps {
  id: string
}
export default function ProductDetail({ id }: ProductDetailProps) {
  const price = 115000
  const discountPrice = 100000
  const imageList = [BlackBoxImage, BlackBoxImage2, BlackBoxImage, BlackBoxImage2]
  return (
    <div>
      {/* 상품 디테일 상부 */}
      <div className='grid w-full grid-cols-2 gap-10'>
        {/* 상품 이미지 갤러리 */}
        <ProductImageGallery imageList={imageList} />

        {/* 상품 옵션 선택 */}
        <div className='flex w-full flex-col'>
          <h2 className='text-2xl font-bold'>세상에서 가장 멋지고 사랑스러운 블랙박스 {id}</h2>
          <span className='mt-5 text-base line-through opacity-50'>
            {price?.toLocaleString()}원
          </span>
          <div className='flex gap-3'>
            <span className='text-xl font-bold text-red-500'>{15}%</span>
            <span className='text-xl font-bold'>{discountPrice?.toLocaleString()}원</span>
          </div>
          <hr className='mt-5 text-gray-300' />
          <div className='mt-5 flex flex-col gap-2 text-base'>
            <div className='flex'>
              <span className='w-24 font-semibold'>배송비</span>{' '}
              <span className='opacity-50'> 3,000원 (30,000원 이상 구매 시 무료)</span>
            </div>
            <div className='flex'>
              <span className='w-24 font-semibold'>배송정보</span>{' '}
              <span className='opacity-50'>평일 오후 3시까지 주문 시 오늘출발</span>
            </div>
          </div>
          <hr className='mt-5 text-gray-300' />
          <div className='mt-5 flex flex-col gap-5'>
            <span className='text-lg font-semibold'>* 필수 선택</span>
            <select className='h-10'>
              <option value='블랙박스 + 직접'>블랙박스 + 직접</option>
              <option value='블랙박스 + 출장'>블랙박스 + 출장</option>
            </select>

            <span className='text-lg font-semibold'>* 추가 선택</span>
            <select className='h-10'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <select className='h-10'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <select className='h-10'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <hr className='mt-5 text-gray-300' />
          <button className='mt-5 h-12 w-full rounded-md bg-gray-400 text-lg'>
            장바구니에 담기
          </button>
          <button className='mt-5 h-12 w-full rounded-md bg-gray-400 text-lg'>바로 구매</button>
        </div>
      </div>

      <hr className='mt-10 text-gray-400' />

      {/* 상품 detail 이미지 */}
      <div className='mt-10 flex flex-col items-center justify-center'>
        {imageList.map((img, index) => (
          <Image src={img} key={index} alt={'대표이미지'} className='rounded-md object-cover' />
        ))}
      </div>
      <hr className='mt-10 text-gray-400' />
      {/* 상품 리뷰 */}
      <div className='mt-10'></div>
    </div>
  )
}
