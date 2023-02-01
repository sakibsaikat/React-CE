import React from 'react';
import './Slider.css';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


import s1 from './../../../../Assets/s1.png';
import s2 from './../../../../Assets/s2.jpg';
import s3 from './../../../../Assets/s4.jpg';




const Slider = () => {
  return (
    <div className='slider_container'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={s3} alt='slide' /></SwiperSlide>
        <SwiperSlide><img src={s3} alt='slide' /></SwiperSlide>
        <SwiperSlide><img src={s3} alt='slide' /></SwiperSlide>
     

      </Swiper>
    </div>
  )
}

export default Slider