import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import PromoSlide from '../iphone-banner/slide'

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full max-w-[1200px] h-[400px] lg:h-[350px]"
    >
      <SwiperSlide>
        <PromoSlide />
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide />
      </SwiperSlide>
      {/* добавь еще слайды при необходимости */}
    </Swiper>
  )
}
