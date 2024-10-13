import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider1 = ({ images, className }) => {
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={className}
        breakpoints={{
          640: {
            slidesPerView: 1, // Mobile screens
          },
          768: {
            slidesPerView: 2, // Medium screens (md)
          },
          1024: {
            slidesPerView: 3, // Large screens (lg)
          },
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt="Image"
                className="w-full h-full block object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider1;
