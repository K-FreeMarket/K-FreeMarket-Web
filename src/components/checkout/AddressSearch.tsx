'use client'

import { useState } from 'react'
import { DaumPostcodeData } from '@/types/global' // 타입 정의 import

export default function AddressSearch() {
  const [postcode, setPostcode] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [deliveryMessage, setDeliveryMessage] = useState('')
  const [customMessage, setCustomMessage] = useState('')

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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDeliveryMessage(value)
    if (value !== '직접 입력') {
      setCustomMessage('')
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
          className='h-10 rounded bg-black px-4 text-white'
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

      <select
        className='mt-5 h-10 w-full rounded border border-gray-400 px-2'
        value={deliveryMessage}
        onChange={handleSelectChange}
      >
        <option value=''>메시지 선택 (선택사항)</option>
        <option value='배송 전에 미리 연락바랍니다.'>배송 전에 미리 연락바랍니다.</option>
        <option value='부재 시 경비실에 맡겨주세요.'>부재 시 경비실에 맡겨주세요.</option>
        <option value='부재 시 문 앞에 놓아주세요.'>부재 시 문 앞에 놓아주세요.</option>
        <option value='택배함에 보관해 주세요.'>택배함에 보관해 주세요.</option>
        <option value='직접 입력'>직접 입력</option>
      </select>

      {deliveryMessage === '직접 입력' && (
        <textarea
          rows={4}
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          placeholder='메시지를 직접 입력하세요'
          className='w-full rounded border border-gray-400 px-2 py-1'
        />
      )}
    </div>
  )
}
