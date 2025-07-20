import AddressSearch from '@/components/checkout/AddressSearch'

export default function CheckoutForm() {
  return (
    <form className='w-full'>
      {/* 사용자 정보 이름 */}
      <div className='flex w-full flex-col gap-2'>
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
          전화번호 <span className='text-red-500'>*</span>
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

      {/* 상품 정보 */}
      <div></div>

      {/* 결제 */}
      <div></div>
    </form>
  )
}
