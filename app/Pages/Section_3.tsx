"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";
import React from 'react'

function Sectionn_3() {

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
    <div className="container">
      <div className='pt-4 pb-4'>
                          <h4 className='text-white'>Our Works</h4>
                          <h2 className='text-white'>Featured Projects</h2>
                      </div>
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
              <SwiperSlide key={slide.id} className="project-slide">
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
          </div>
    </>
  )
}

export default Sectionn_3