// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
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
        <SwiperSlide><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide><img className='w-full h-full' src="https://t4.ftcdn.net/jpg/02/94/82/71/360_F_294827120_2LLGq6gOnc9MvpZ0ejyQH1Rzo9YkPzNH.jpg" alt="" /></SwiperSlide> */}
       
      </Swiper>
        </div>
    );
};

export default Slider;