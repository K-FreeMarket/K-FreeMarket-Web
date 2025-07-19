'use client'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

interface ProductImageGalleryInterface {
  imageList: string[] | StaticImageData[]
}

export default function ProductImageGallery({ imageList }: ProductImageGalleryInterface) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const handleSelectImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  if (!imageList || imageList.length === 0) {
    return <div className='w-full py-10 text-center text-gray-500'>표시할 이미지가 없습니다.</div>
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='w-full'>
        <Image
          src={imageList[selectedImageIndex]}
          alt={'대표이미지'}
          className='rounded-md object-cover'
          loading='lazy'
        />
      </div>
      <div className='grid w-full grid-cols-5 gap-2'>
        {imageList.map((img, index) => (
          <div
            className={`w-full cursor-pointer rounded-md ${selectedImageIndex == index ? 'border border-gray-400' : ''}`}
            key={index}
            onClick={() => {
              handleSelectImage(index)
            }}
          >
            <Image
              src={img}
              alt={'선택 페이지'}
              className='rounded-md object-cover'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
