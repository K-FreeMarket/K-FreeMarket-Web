'use client'

import { useState } from 'react'

export default function DeliveryMessageSelector() {
  const [customMessage, setCustomMessage] = useState('')
  const [deliveryMessage, setDeliveryMessage] = useState('')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDeliveryMessage(value)
    if (value !== '직접 입력') {
      setCustomMessage('')
    }
  }

  return (
    <div className='mt-10 w-full'>
      <select
        className='h-10 w-full rounded border border-gray-400 px-2'
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
          className='mt-5 w-full rounded border border-gray-400 px-2 py-1'
        />
      )}
    </div>
  )
}
