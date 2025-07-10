import {useSelector } from "react-redux";
import Delivery from "../../widgets/delivery/delivery";
import Stars from "../../widgets/stars/star";
import InfoSwiper from "../../widgets/info-swipper/swipper";
import FlashSales from "../../widgets/best-selling/best-selling";

const Info = () => {
  const product = useSelector((state) => state.products.byIdProduct);
  
  return (
    <>
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="w-full md:w-[60%] ">
          <InfoSwiper />
        </div>
        <div className="w-full md:w-[35%] flex flex-col gap-7">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">{product?.productName}</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Stars />
                <p className="text-[18px] text-[#BFBFBF] ">(150 Reviews)</p>
              </div>
              <div className="pl-4 border-l-[2px] border-[#BFBFBF]">
                <p className="text-[red] font-medium">OutStock</p>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-2xl font-bold">${product?.price}</p>
              <p className="text-2xl font-bold line-through text-[#BFBFBF]">${product?.discountPrice}</p>
            </div>
            <p className="opacity-60 text-[18px]">Lorem ipsum dolor sit amet High-quality lorem text with balanced rhythm for design previews & seamless visual alignment in any layout.</p>
            <hr className="h-[2px] bg-[#BFBFBF] border-none" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-[20px]">Colours:</p>
              <div className="flex pt-[5px] gap-2">
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": product?.color,
                  }}
                  />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#DB4444",
                  }}
                  />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#BFBFBF",
                  }}
                  />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#12CA5B",
                  }}
                  />
              </div>
            </div>
            
          </div>
          <Delivery />
        </div>
      </div>
    </div>
    <FlashSales title='Related Item'/>
                  </>
  );
};

export default Info;