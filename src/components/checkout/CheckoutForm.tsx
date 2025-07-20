import AddressSearch from '@/components/checkout/AddressSearch'

export default function CheckoutForm() {
  return (
    <form className='w-full'>
      <div className='flex h-16 w-full items-center justify-center bg-black text-2xl font-semibold text-white'>
        주문 / 결제
      </div>
      {/* 사용자 정보 이름 */}
      <div className='mt-5 flex w-full flex-col gap-2'>
        <label id='userName' className='text-base font-semibold'>
          받는사람 <span className='text-red-500'>*</span>
        </label>
        <input
          name='userName'
          type='text'
          placeholder='이름'
          className='h-10 w-full rounded-md border border-gray-400 px-2'
        ></input>
      </div>

      <div className='mt-5 flex w-full flex-col gap-2'>
        <label id='userName' className='text-base font-semibold'>
          전화번호 <span className='text-red-500'>*</span>{' '}
          <span className='text-sm text-gray-400'>- 빼고 입력해주세요, 01000000000</span>
        </label>
        <input
          name='userName'
          type='text'
          placeholder='전화번호'
          className='h-10 w-full rounded-md border border-gray-400 px-2'
        ></input>
      </div>

      {/* 주소 가져오기 */}
      <div className='mt-5'>
        <h4 className='text-base font-semibold'>
          주소 <span className='text-red-500'>*</span>
        </h4>
        <AddressSearch />
      </div>

      <hr className='mt-5 text-gray-400' />
      {/* 상품 정보 */}
      <div className='mt-5'>
        <h4 className='text-base font-semibold'>주문 상품</h4>
        <div>상품이미지</div>
      </div>

      {/* 결제 */}
      <div></div>
    </form>
  )
}
