import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useSelector } from "react-redux";

const Category = () => {
  const category = useSelector((state) => state.home.dataCategory);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="p-[20px_45px]">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-red-500 font-semibold">Categories</h2>
          <h1 className="text-3xl font-bold">Browse By Category</h1>
        </div>

        <div className="hidden lg:flex gap-3">
          <button
            ref={prevRef}
            className="w-9 h-9 rounded-full bg-gray-200 text-xl font-bold hover:bg-black hover:text-white transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-9 h-9 rounded-full bg-gray-200 text-xl font-bold hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
      >
        {category.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col items-center">
              <div className="w-full h-32 flex items-center justify-center mb-2">
                <img
                  src={`http://37.27.29.18:8002/images/${cat.categoryImage}`}
                  alt={cat.categoryName}
                  className="max-h-full object-contain"
                />
              </div>

              <h3 className="text-sm font-medium">{cat.categoryName}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;