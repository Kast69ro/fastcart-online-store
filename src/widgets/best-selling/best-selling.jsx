import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import heart from "#/heart small.png";
import look from "#/Quick View.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../entities/cart/cart-slice";
import { Link, useNavigate } from "react-router-dom";

const FlashSales = () => {
  const product = useSelector((state) => state.home.dataProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (id) => {
    if (localStorage.getItem("token") != null) {
      dispatch(addToCart(id));
    } else {
      navigate("/log-in");
    }
  };

  return (
    <div className="p-[20px_45px]">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-red-500 font-semibold">This Month</h2>
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
        </div>
        <Link to="/products">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold">
            View All Products
          </button>
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {product.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="relative group bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                  <img src={heart} alt="Like" className="w-4 h-4" />
                </div>
                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                  <img src={look} alt="View" className="w-4 h-4" />
                </div>
              </div>

              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={"http://37.27.29.18:8002/images/" + el.image}
                  alt={el.productName}
                  className="max-h-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-sm font-medium">{el.nameProduct}</h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-red-500 font-semibold">${el.price}</span>
              </div>
              <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐ </div>

              <div className="absolute bottom-0 left-0 right-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-all duration-300">
                <button
                  className="w-full bg-black text-white py-2 rounded-b-xl text-sm font-medium"
                  onClick={() => handleAdd(el.id)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSales;
