'use client'

import exImage1 from '@image/images/exImage1.png'
import exImage2 from '@image/images/exImage2.png'
import exImage3 from '@image/images/exImage3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swiper-overrides.css'
import Image from 'next/image'
export default function MainBanner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper mx-auto aspect-[24/9] w-full max-w-screen-2xl'
    >
      <SwiperSlide>
        <Image src={exImage1} alt='배너 이미지' className='h-full w-full object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={exImage2} alt='배너 이미지' className='h-full w-full object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={exImage3} alt='배너 이미지' className='h-full w-full object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={exImage2} alt='배너 이미지' className='h-full w-full object-cover' />
      </SwiperSlide>
    </Swiper>
  )
}
