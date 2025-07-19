'use client'

import { useState } from 'react'

interface Option {
  name: string
  values: string[]
}

interface ProductOptionSelectorProps {
  options: Option[]
}

export default function ProductOptionSelector({ options }: ProductOptionSelectorProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>(Array(options.length).fill(''))

  const handleChange = (index: number, value: string) => {
    const updated = [...selectedValues]
    updated[index] = value
    setSelectedValues(updated)
  }

  return (
    <div className='mt-5 flex flex-col gap-3'>
      {options.map((option, i) => (
        <div key={i}>
          <span className='font-semibold'>{option.name}</span>
          <select
            className='mt-2 h-10 w-full rounded-md border'
            value={selectedValues[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          >
            <option value=''>선택하세요</option>
            {option.values.map((v, vi) => (
              <option key={vi} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}
