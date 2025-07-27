import AddressSelector from '@/components/checkout/AddressSelector'
import CheckoutItem from '@/components/checkout/CheckoutItem'
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector'
import BlackBox from '@image/images/blackboxImage.png'
import { Suspense } from 'react'

const initialItems = [
  {
    title: '세상에서 가장 멋진 블랙박스 0',
    imageSrc: BlackBox,
    options: ['직접 설치'],
    price: 100000,
  },
]

const initialAddress = [
  {
    name: '정승근',
    mobileNumber: '01066807503',
    postcode: '01618',
    address: '서울 노원구 동일로227길 86 (상계동, 상계주공16단지아파트)',
    detailAddress: '1604동 1410호',
  },
]

export default function CheckoutForm() {
  return (
    <form className='w-full'>
      <div className='flex h-16 w-full items-center justify-center bg-black text-2xl font-semibold text-white'>
        주문 / 결제
      </div>

      <AddressSelector addressList={initialAddress} />

      <hr className='mt-5 text-gray-400' />
      {/* 상품 정보 */}
      <div className='mt-5'>
        <h4 className='text-base font-semibold'>
          주문 상품 <span className='text-red-500'>*</span>
        </h4>
        <Suspense fallback={<div>상품 정보를 불러오는 중...</div>}>
          <CheckoutItem initialItems={initialItems} />
        </Suspense>
      </div>

      <hr className='mt-5 text-gray-400' />
      {/* 결제 */}
      <div className='mt-5 flex flex-col'>
        <h4 className='text-base font-semibold'>
          결제 선택하기 <span className='text-red-500'>*</span>
        </h4>

        <PaymentMethodSelector methods={['카드', '네이버페이', '카카오페이']} />
      </div>

      <button
        type='submit'
        className='mt-5 w-full rounded-md bg-gray-400 p-3 text-xl font-semibold hover:bg-black hover:text-white'
      >
        결제
      </button>
    </form>
  )
}
