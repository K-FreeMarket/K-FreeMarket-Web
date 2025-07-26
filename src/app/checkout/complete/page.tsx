import Link from 'next/link'

const mockProps = {
  orderId: '20250723-00001',
  productName: '세상에서 가장 멋지고 사랑스러운 블랙박스',
  quantity: 1,
  totalPrice: 100000,
  paymentMethod: '네이버페이',
  recipient: {
    name: '정승근',
    phone: '010-1234-5678',
    address: '서울특별시 노원구 상계로 123',
    detail: '103동 704호',
  },
}

export default function CompletePage() {
  return (
    <main className='row-start-2 flex h-full w-full flex-col gap-[32px] px-150 pb-20'>
      <div className='mx-auto max-w-xl px-4 py-10 text-gray-800'>
        <div className='mb-8 text-center'>
          <h2 className='text-2xl font-bold text-black dark:text-white'>
            🎉 결제가 완료되었습니다!
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            주문번호{' '}
            <span className='font-medium text-black dark:text-white'>#{mockProps.orderId}</span>
          </p>
        </div>

        {/* 주문 정보 */}
        <div className='rounded-md border border-gray-200 bg-white p-4 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-black'>주문 내역</h3>
          <div className='space-y-2 text-sm'>
            <div className='flex justify-between'>
              <span className='text-gray-500'>상품명</span>
              <span className='text-gray-900'>
                {mockProps.productName} × {mockProps.quantity}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>결제금액</span>
              <span className='text-gray-900'>₩{mockProps.totalPrice.toLocaleString('ko-KR')}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>결제수단</span>
              <span className='text-gray-900'>{mockProps.paymentMethod}</span>
            </div>
          </div>

          <hr className='my-4' />

          {/* 배송지 정보 */}
          <h3 className='mb-2 text-base font-semibold text-black'>배송지 정보</h3>
          <div className='text-sm leading-relaxed text-gray-800'>
            <div>
              {mockProps.recipient.name} / {mockProps.recipient.phone}
            </div>
            <div>
              {mockProps.recipient.address} {mockProps.recipient.detail}
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <Link
            href={'/'}
            className='flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800'
          >
            주문 상세 보기
          </Link>
          <Link
            href={'/'}
            className='flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-black'
          >
            계속 쇼핑하기
          </Link>
        </div>
      </div>
    </main>
  )
}
