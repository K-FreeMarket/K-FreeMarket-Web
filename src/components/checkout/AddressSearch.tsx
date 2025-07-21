'use client'

import { useState } from 'react'
import { DaumPostcodeData } from '@/types/global' // 타입 정의 import

export default function AddressSearch() {
  const [postcode, setPostcode] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')

  const openPostcodePopup = () => {
    if (typeof window !== 'undefined' && window.daum?.Postcode) {
      new window.daum.Postcode({
        oncomplete: (data: DaumPostcodeData) => {
          let fullAddress = data.address
          let extraAddress = ''

          if (data.addressType === 'R') {
            if (data.bname && /[동|로|가]$/g.test(data.bname)) {
              extraAddress += data.bname
            }
            if (data.buildingName) {
              extraAddress += extraAddress ? `, ${data.buildingName}` : data.buildingName
            }
            if (extraAddress) {
              fullAddress += ` (${extraAddress})`
            }
          }

          setPostcode(data.zonecode)
          setAddress(fullAddress)
          setDetailAddress('')
        },
      }).open()
    }
  }

  return (
    <div className='mt-2 space-y-2'>
      <div className='flex gap-2'>
        <input
          type='text'
          value={postcode}
          placeholder='우편번호'
          readOnly
          className='h-10 w-[150px] rounded border border-gray-400 px-2'
        />
        <button
          type='button'
          onClick={openPostcodePopup}
          className='h-10 rounded bg-black px-4 text-white dark:bg-gray-400'
        >
          주소찾기
        </button>
      </div>

      <input
        type='text'
        value={address}
        placeholder='주소'
        readOnly
        className='h-10 w-full rounded border border-gray-400 px-2'
      />

      <input
        type='text'
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
        placeholder='상세주소'
        className='h-10 w-full rounded border border-gray-400 px-2'
      />
    </div>
  )
}
