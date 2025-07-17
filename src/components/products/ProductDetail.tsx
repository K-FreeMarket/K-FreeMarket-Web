import Image from 'next/image'
import BlackBoxImage from '@image/images/blackboxImage.png'

interface ProductDetailProps {
  id: string
}
export default function ProductDetail({ id }: ProductDetailProps) {
  const price = 115000
  const discountPrice = 100000
  return (
    <div>
      {/* 이미지와 결제칸 */}
      <div className='grid w-full grid-cols-2 gap-10'>
        <div className='flex flex-col gap-5'>
          <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
          <div className='grid w-full grid-cols-5 gap-2'>
            <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
            <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
            <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
          </div>
        </div>

        <div className='flex w-full flex-col'>
          <h2 className='text-2xl font-bold'>세상에서 가장 멋지고 사랑스러운 블랙박스 {id}</h2>
          <span className='line-through opacity-50'>{price?.toLocaleString()}원</span>
          <div className='flex gap-3'>
            <span className='text-lg font-bold text-red-500'>{15}%</span>
            <span className='text-lg font-bold'>{discountPrice?.toLocaleString()}원</span>
          </div>
          <hr className='mt-5 text-gray-300' />
          <div>배송비 3,000원</div>
          <div>배송 정보 평일 오후 3시까지 주문 시 오늘출발</div>
          <hr className='mt-5 text-gray-300' />
          <div>상세정보담기</div>
          <hr className='mt-5 text-gray-300' />
          <div>장바구니에 담기</div>
          <div>바로 구매</div>
        </div>
      </div>

      <hr className='mt-5 text-gray-400' />

      {/* 상품 detail 이미지 */}
      <div className='mt-5 flex flex-col items-center justify-center'>
        <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
        <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
        <Image src={BlackBoxImage} alt={'대표이미지'} className='rounded-md object-cover' />
      </div>
      <hr className='mt-5 text-gray-400' />
      {/* 상품 리뷰 */}
      <div></div>
    </div>
  )
}
