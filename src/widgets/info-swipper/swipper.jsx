import { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {API} from '../../config/utilits'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const InfoSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = useSelector((state) => state.products.byIdProduct);
  const images = product?.images || [];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center max-h-[600px] h-[600px] justify-between gap-4">
      <div className="w-[20%] h-[50vh] flex flex-col">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="flex-1 hidden md:block"
        >
          {images.map((e) => (
            <SwiperSlide key={e.id}>
              <img src={`${API}/images/${e.images}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[85%]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((e) => (
            <SwiperSlide key={e.id}>
              <img
                src={`${API}/images/${e.images}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfoSwiper;
