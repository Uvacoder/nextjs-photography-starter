import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
          <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
          <div className='relative flex justify-center p-4'>
              <Swiper
                className='w-full h-full'
                modules={[Navigation, Pagination,]}
                slidesPerView={1}
                navigation
                loop
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                  
                    <SwiperSlide><Image src='/Slider1.jpeg' alt='/' width='1440'height='600'objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image src='/Slider2.jpeg' alt='/' width='1440'
                  height='600'
                  objectFit='cover' /></SwiperSlide>
      <SwiperSlide><Image src='/Slider3.jpeg' alt='/' width='1440'
                  height='600'
                  objectFit='cover'/></SwiperSlide>
      <SwiperSlide><Image src='/Slider4.jpeg' alt='/' width='1440'
                  height='600'
                  objectFit='cover' /></SwiperSlide>
          
              </Swiper>
        </div>
    </div>
             
  )
}

export default Slider