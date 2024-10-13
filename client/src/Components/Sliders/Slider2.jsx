import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Slider2 = ({ images, loop, className }) => {
  return (
    <>
      <div className={className}>
        <Swiper
          effect={"cards"}
          loop={loop}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-full"
        >
          {images &&
            images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full block object-cover"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider2;
