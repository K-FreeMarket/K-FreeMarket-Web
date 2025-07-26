'use client'

import { useState } from 'react'
import AddressSearch from '@/components/checkout/AddressSearch'
import DeliveryMessageSelector from '@/components/checkout/DeliveryMessageSelector'

type Address = {
  name: string
  mobileNumber: string
  postcode: string
  address: string
  detailAddress: string
}

interface AddressSelectorProps {
  addressList: Address[]
}

export default function AddressSelector({ addressList }: AddressSelectorProps) {
  const [addressType, setAddressType] = useState<'기존' | '직접'>('기존')
  const selected = addressList[0] // 고정된 첫 번째 주소

  return (
    <div className='mt-5'>
      {/* 선택 옵션 */}
      <div className='mt-5 flex w-full overflow-hidden rounded-md border border-gray-300'>
        {/* 기존 주소 사용 */}
        <input
          type='radio'
          id='useExisting'
          name='addressType'
          value='기존'
          checked={addressType === '기존'}
          onChange={() => setAddressType('기존')}
          className='hidden'
        />
        <label
          htmlFor='useExisting'
          className={`w-1/2 cursor-pointer border-r border-gray-300 px-4 py-2 text-center text-sm transition ${
            addressType === '기존'
              ? 'border-b-transparent bg-black text-white'
              : 'bg-gray-100 text-gray-600'
          } `}
        >
          기존 주소 사용
        </label>

        {/* 직접 입력 */}
        <input
          type='radio'
          id='useManual'
          name='addressType'
          value='직접'
          checked={addressType === '직접'}
          onChange={() => setAddressType('직접')}
          className='hidden'
        />
        <label
          htmlFor='useManual'
          className={`w-1/2 cursor-pointer border-l border-gray-300 px-4 py-2 text-center text-sm transition ${
            addressType === '직접'
              ? 'border-b-transparent bg-black text-white'
              : 'bg-gray-100 text-gray-600'
          } `}
        >
          직접 입력
        </label>
      </div>

      {/* 기존 주소 - select 제거, 첫 주소만 표시 */}
      {addressType === '기존' && selected && (
        <div className='mt-4 rounded-md border border-gray-300 bg-white p-4 text-sm'>
          <div className='grid grid-cols-[100px_1fr] items-start gap-x-4 gap-y-2'>
            <span className='text-gray-500'>받는 사람</span>
            <span className='font-medium text-gray-900'>{selected.name}</span>

            <span className='text-gray-500'>전화번호</span>
            <span className='font-medium text-gray-900'>{selected.mobileNumber}</span>

            <span className='text-gray-500'>주소</span>
            <div className='leading-snug font-medium text-gray-900'>
              ({selected.postcode}) {selected.address}
              <br />
              {selected.detailAddress}
            </div>
          </div>

          <div className='mt-4'>
            <DeliveryMessageSelector />
          </div>
        </div>
      )}

      {/* 직접 입력 */}
      {addressType === '직접' && (
        <div className='mt-4 space-y-4'>
          <div className='flex w-full flex-col gap-2'>
            <label htmlFor='receiverName' className='text-sm font-semibold'>
              받는 사람 <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              name='receiverName'
              placeholder='이름'
              className='h-10 w-full rounded-md border border-gray-400 px-2'
              required
            />
          </div>

          <div className='flex w-full flex-col gap-2'>
            <label htmlFor='receiverPhone' className='text-sm font-semibold'>
              전화번호 <span className='text-red-500'>*</span>
              <span className='ml-1 text-xs text-gray-400'>(하이픈 없이 입력)</span>
            </label>
            <input
              type='text'
              name='receiverPhone'
              placeholder='01012345678'
              className='h-10 w-full rounded-md border border-gray-400 px-2'
              required
            />
          </div>

          <AddressSearch />
          <DeliveryMessageSelector />
        </div>
      )}
    </div>
  )
}
