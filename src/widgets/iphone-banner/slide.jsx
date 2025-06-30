import logo from '#/1200px-Apple_gray_logo 1.png'
import { Link } from 'react-router-dom'

export default function PromoSlide({foto,discount,series}) {
  return (
    <div className="flex flex-col   lg:flex-row items-center justify-center w-full h-full bg-black text-white p-6 lg:p-10 rounded-[20px] overflow-hidden">
      <div className="flex flex-col gap-4 lg:w-1/2 text-center lg:text-left ">
        <img src={logo} alt="Apple" className="w-10 h-10 mx-auto lg:mx-0" />
        <p className="text-sm lg:text-base">iPhone {series} Series</p>
        <h2 className="text-[32px] leading-none font-bold lg:text-[48px]">
          Up to {discount}%  <br /> off Voucher
        </h2>
        <button className="mt-1 text-sm lg:text-base  underline-offset-4 flex items-center gap-1 justify-center lg:justify-start">
          <Link to="/products">Shop Now</Link>
          <span className="text-xl">→</span>
        </button>
      </div>

      <div className="lg:w-[60%] rounded-[20px] overflow-hidden flex justify-center">
        <img
          src={foto}
          alt="iPhone"
          className="w-full max-w-[500px] h-full  rounded-[20px]"
        />
      </div>
    </div>
  )
}
