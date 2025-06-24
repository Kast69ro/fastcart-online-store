import ImageSlider from "../../widgets/main-swiper/swiper";
import FlashSales from "../../widgets/flash-sales/flash-sales";
import Category from "../../widgets/browsw-by-category/category";
import BestSales from "../../widgets/best-selling/best-selling";
import jbl from "#/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import time from "#/Frame 601.png";
import card5 from "#/Services (4).png";
import card6 from "#/Services (5).png";
import card7 from "#/Services (6).png";
import Card3 from "../../entities/for-about/thrid-card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../../entities/for-about/home/home-slice";

export default function Home() {
  const category = useSelector((state) => state.home.dataCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <div className="flex flex-col gap-[100px]">
      <section>
        <div className=" lg:flex lg:items-center w-[100%] lg:justify-center lg:p-[20px_50px] ">
          <div className="flex flex-wrap lg:flex-col  lg:w-[20%] p-[10px] lg:justify-around gap-[15px]">
            {category.map((el) => {
              return <p key={el.id}>{el.categoryName}</p>;
            })}
          </div>
          <div className="lg:w-[80%]">
            <ImageSlider />
          </div>
        </div>
      </section>
      <section>
        <FlashSales />
      </section>
      <section>
        <Category />
      </section>
      <section>
        <BestSales />
      </section>
      <section className="flex md:justify-around flex-col md:flex-row items-center bg-black py-[40px] w-[90%] m-auto rounded-[10px] mt-[100px]">
        <aside className="flex flex-col gap-[30px] md:w-[30%] ml-[10px] px-[10px]">
          <h1 className="text-green-500 text-[20px]">Categories</h1>
          <h1 className="text-white text-[40px]">
            Enhance Your Music Experience
          </h1>
          <img src={time} alt="" />
          <button className="border border-black bg-[#00FF66] text-black px-4 py-2 w-[150px] font-semibold rounded hover:opacity-90 transition">
            Buy Now!
          </button>
        </aside>
        <img className="mt-[60px]" src={jbl} alt="" />
      </section>

      <section>
        <BestSales />
      </section>
       <section>
              <div className="flex flex-col gap-[50px] lg:flex-row lg:justify-around mb-[100px]">
                  <Card3>{[card5,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
                  <Card3>{[card6,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
                  <Card3>{[card7,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
              </div>
            </section>
    </div>
  );
}
