'use client'

import { useState } from 'react'

interface PaymentMethodSelectorProps {
  methods: string[]
}

export default function PaymentMethodSelector({ methods }: PaymentMethodSelectorProps) {
  const [selected, setSelected] = useState<string>('')

  const handleSelect = (method: string) => {
    setSelected(method)
  }

  return (
    <div className='mt-2 flex flex-col gap-3'>
      {methods.map((method) => (
        <button
          key={method}
          type='button'
          onClick={() => handleSelect(method)}
          className={`w-full rounded-md border px-4 py-3 text-left text-sm font-medium transition ${
            selected === method
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:border-black'
          }`}
        >
          {method}
        </button>
      ))}

      {/* Hidden input for form submission */}
      <input type='hidden' name='paymentMethod' value={selected} />
    </div>
  )
}
