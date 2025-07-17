'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import BlackBoxImage from '@image/images/blackboxImage.png'

interface ProductCardProps {
  id: number
  title: string
  price: number
  discountPrice?: number
  discountRate?: number
  imageSrc?: string | StaticImageData
}

export default function ProductCard({
  id,
  title,
  price,
  discountPrice,
  discountRate,
  imageSrc = BlackBoxImage,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/detail/${id}`}
      className='flex h-auto w-full flex-col rounded-md text-base font-semibold'
    >
      <Image src={imageSrc} alt={title} className='rounded-md object-cover' />
      <div className='mt-5 flex flex-col gap-2 px-3'>
        <p className='flex-grow flex-wrap leading-snug font-bold'>{title}</p>
        <div className='flex w-full gap-4'>
          {discountRate && <span className='font-bold text-red-500'>{discountRate}%</span>}
          <span>{discountPrice?.toLocaleString()}원</span>
          {discountRate && (
            <span className='line-through opacity-50'>{price.toLocaleString()}원</span>
          )}
        </div>
      </div>
    </Link>
  )
}
