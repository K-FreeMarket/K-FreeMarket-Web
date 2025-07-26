'use client'

import Image, { StaticImageData } from 'next/image'
import XmarkIcon from '@image/icons/xmark.svg'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import BlackBoxImage from '@image/images/blackboxImage.png'

const IMAGE_MAP: Record<string, StaticImageData> = {
  BlackBoxImage,
}

type Item = {
  title: string
  imageSrc: string | StaticImageData
  options: string[]
  price: number
}

interface CheckoutItemProps {
  initialItems: Item[] // 상태 초기화용 props
}

export default function CheckoutItem({ initialItems }: CheckoutItemProps) {
  const searchParams = useSearchParams()

  const [checkoutItems, setCheckoutItems] = useState<Item[]>(initialItems)

  const totalPrice = checkoutItems.reduce((sum, item) => sum + item.price, 0)

  const handleRemove = (index: number) => {
    const updated = checkoutItems.filter((_, i) => i !== index)
    setCheckoutItems(updated)
  }

  useEffect(() => {
    const product = searchParams.get('product') || ''
    const imageSrcKey = searchParams.get('imageSrc') || ''
    const optionsRaw = searchParams.get('options') || '[]'
    const priceRaw = searchParams.get('price') || '0'

    try {
      const parsedOptions = JSON.parse(optionsRaw)
      const parsedPrice = parseInt(priceRaw, 10)
      const cleanKey = imageSrcKey.replaceAll('"', '')

      if (product && IMAGE_MAP[cleanKey]) {
        setCheckoutItems([
          {
            title: decodeURIComponent(product.replaceAll('"', '')),
            imageSrc: IMAGE_MAP[cleanKey],
            options: parsedOptions,
            price: parsedPrice,
          },
        ])
      }
    } catch (e) {
      console.error('쿼리 파싱 오류:', e)
    }
  }, [searchParams])

  return (
    <>
      {checkoutItems.map((item, idx) => (
        <div
          key={idx}
          className='mt-5 flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-shadow hover:shadow-md'
        >
          {/* 이미지 */}
          <div className='h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
            <Image
              src={item.imageSrc}
              alt={`${item.title} 이미지`}
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          {/* 상품 정보 */}
          <div className='ml-4 flex flex-1 flex-col justify-between text-sm'>
            <span className='text-base font-semibold text-gray-900'>{item.title}</span>
            <span className='text-gray-500'>{item.options.join(', ')}</span>
            <span className='mt-1 font-medium text-gray-700'>₩{item.price.toLocaleString()}</span>
          </div>

          {/* 삭제 버튼 */}
          <button
            type='button'
            className='ml-4 text-gray-400 transition-colors hover:text-red-500'
            aria-label='Remove item'
            onClick={() => handleRemove(idx)}
          >
            <XmarkIcon className='h-6 w-6' />
          </button>
        </div>
      ))}
      <h3 className='mt-6 text-end text-xl font-semibold'>
        총 {totalPrice.toLocaleString('ko-KR')} 원
      </h3>
    </>
  )
}
