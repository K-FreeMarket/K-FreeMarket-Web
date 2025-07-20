import BlackBoxImage from '@image/images/blackboxImage.png'
import BlackBoxImage2 from '@image/images/blackboxImage2.png'
import ProductImageGallery from '@/components/products/detail/ProductImageGallery'
import ProductOptionSelector from '@/components/products/detail/ProductOptionSelector'
import ProductTabSection from '@/components/products/detail/ProductTabSection'
interface ProductDetailProps {
  id: string
}
export default function ProductDetail({ id }: ProductDetailProps) {
  const price = 115000
  const discountPrice = 100000
  const imageList = [BlackBoxImage, BlackBoxImage2, BlackBoxImage, BlackBoxImage2]
  const reviews = [
    {
      id: 1,
      createdAt: '2025-07-16',
      content: '너무 좋아요!',
      rating: 5,
      user: '정승근',
      options: ['64GB', '출장 설치'],
    },
    {
      id: 2,
      createdAt: '2025-07-16',
      content: '좋아요!',
      rating: 4,
      user: '정수수',
      options: ['64GB', '출장 설치'],
    },
  ]

  const options = [
    {
      name: '설치 방법',
      required: true,
      values: ['직접', '출장'],
    },
    {
      name: '용량 선택',
      required: false,
      values: ['64GB', '128GB'],
    },
  ]

  const questions = [
    {
      id: 1,
      title: '작동',
      content: '작동하지 않습니다.',
      is_private: true,
      is_answered: false,
      createAt: '2025-07-16',
      user: '정승근',
    },
    {
      id: 2,
      title: '외부',
      content: '깨져이습니다.',
      is_private: true,
      is_answered: true,
      createAt: '2025-07-16',
      user: '정승승',
    },
  ]

  const answers = [
    {
      questId: 2,
      content: '반품 요청해주세요',
      createAt: '2025-07-16',
    },
  ]
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
          <hr className='mt-5 text-gray-400' />
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
          <hr className='mt-5 text-gray-400' />
          <ProductOptionSelector options={options} />
          <hr className='mt-5 text-gray-400' />
          <h2 className='mt-5 text-end text-2xl font-semibold'>총 {(100000).toLocaleString()}원</h2>
          <button className='mt-5 h-12 w-full rounded-md bg-gray-300 text-lg font-semibold'>
            장바구니에 담기
          </button>
          <button className='mt-5 h-12 w-full rounded-md bg-gray-300 text-lg font-semibold'>
            바로 구매
          </button>
        </div>
      </div>

      {/* 상품 detail 이미지, Review, Q&A */}
      <ProductTabSection
        productDetailImage={imageList}
        reviews={reviews}
        questions={questions}
        answers={answers}
      />
    </div>
  )
}
