import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          loop
          effect={"fade"}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Image
              src="/Slider1.jpg"
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Slider2.jpg"
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Slider3.jpg"
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Slider4.jpg"
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
