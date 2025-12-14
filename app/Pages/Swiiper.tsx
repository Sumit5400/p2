"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        <SwiperSlide><img src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/banner-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/banner-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/right-quality.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
