"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";

export default function App() {
  // You can also store slides in an array to map them later
  const slides = [
    {
      id: 1,
      img: "https://www.aclnepal.com/np/wp-content/uploads/2023/12/dharahara.png",
      title: "Dharahara",
    },
    {
      id: 2,
      img: "https://www.aclnepal.com/np/wp-content/uploads/2023/12/dharahara.png",
      title: "Dharahara",
    },
    {
      id: 3,
      img: "https://www.aclnepal.com/np/wp-content/uploads/2023/12/dharahara.png",
      title: "Dharahara",
    },
    {
      id: 4,
      img: "https://www.aclnepal.com/np/wp-content/uploads/2023/12/dharahara.png",
      title: "Dharahara",
    },
    {
      id: 5,
      img: "https://www.aclnepal.com/np/wp-content/uploads/2023/12/dharahara.png",
      title: "Dharahara",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="parent">
              <img src={slide.img} alt={slide.title} />
              <h3 className="bg-white mt-2 child text-primary w-100 rounded p-2">
                <a className="text-primary" href="">
                  {slide.title}
                </a>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
