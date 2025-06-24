// PromoSlide.jsx
import foto from '#/hero_endframe__cvklg0xk3w6e_large 2.png'
import logo from '#/1200px-Apple_gray_logo 1.png'
export default function PromoSlide() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full lg:w-[80%] bg-black text-white p-6 lg:p-20">
      {/* Левая часть — текст */}
      <div className="flex flex-col gap-4 lg:w-1/2 text-center lg:text-left">
        <img src={logo} alt="Apple" className="w-10 h-10 mx-auto lg:mx-0" />
        <p className="text-sm lg:text-base">iPhone 14 Series</p>
        <h2 className="text-[32px] leading-none font-bold lg:text-[48px]">
          Up to 10% <br /> off Voucher
        </h2>
        <button className="mt-4 text-sm lg:text-base underline underline-offset-4 flex items-center gap-1 justify-center lg:justify-start">
          Shop Now
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Правая часть — изображение телефона */}
      <div className="lg:w-[60%]">
        <img
          src={foto} 
          alt="iPhone"
          className="w-full max-w-[500px] mx-auto"
        />
      </div>
    </div>
  )
}
