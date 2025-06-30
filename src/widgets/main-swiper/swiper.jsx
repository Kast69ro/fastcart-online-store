import foto from '#/hero_endframe__cvklg0xk3w6e_large 2.png'
import foto1 from '#/iphone_1.jpg'
import foto2 from '#/iphone_2.png'
import foto3 from '#/iphone_4.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import PromoSlide from '../iphone-banner/slide'

export default function Slider() {
  return (
    <Swiper
    spaceBetween={20}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full max-w-[1200px] h-[400px]  rounded-[10px] overflow-hidden"
    >
      <SwiperSlide className="rounded-[10px] overflow-hidden">
        <PromoSlide foto={foto} />
      </SwiperSlide>
      <SwiperSlide className="rounded-[10px] overflow-hidden">
        <PromoSlide foto={foto1} />
      </SwiperSlide>
      <SwiperSlide className="rounded-[10px] overflow-hidden">
        <PromoSlide foto={foto2} />
      </SwiperSlide>
      
      <SwiperSlide className="rounded-[10px] overflow-hidden">
        <PromoSlide foto={foto3} />
      </SwiperSlide>
    </Swiper>
  )
}
