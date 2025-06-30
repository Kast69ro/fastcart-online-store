import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, resetCart } from "../../entities/api/cart/cart";

const Checkout = () => {
  const [checked, setChecked] = useState(true);
  const products = useSelector((state) => state.cart.dataCart);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getCart())
  }, []);
  

  const handlePlaceOrder = () => {
    dispatch(resetCart());
  };

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <div className="md:w-[40%] space-y-3 p-5 rounded-xl shadow-2xl">
          <h2 className="text-3xl">Billing Details</h2>
          <div className="flex flex-col gap-5 ">
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="First name" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Last name" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Street address" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Apartment, floot, etc. (optional)" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Town/City" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Phone Number" />
            <input className="p-3 border-[1px] border-[#BFBFBF] rounded-[8px]" type="text" placeholder="Email Address" />
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div onClick={() => setChecked(!checked)} className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${checked ? "bg-[#DB4444] border-[#DB4444]" : "border-gray-400"}`}>
                {checked && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[16px] font-medium text-black">Save this information for faster check-out next time</span>
            </label>
          </div>
        </div>
        <div className="md:w-[50%] p-4 rounded-lg space-y-4">
          <div className="space-y-2 border-b pb-4">
            {products?.productsInCart?.map((e) => (
              <div key={e.product.id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 overflow-hidden rounded-xl border border-gray-200">
                    <img    src={`http://37.27.29.18:8002/images/${e.product.image}`} alt={e.product.productName} className="object-cover w-full h-full" />
                  </div>
                  <span className="font-medium">{e.product.productName}</span>
                </div>
                <span className="font-semibold">${e.product.price}</span>
              </div>
            ))}

            <hr className="border-b" />

            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${products.totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-500 font-medium">{products.totalDiscountPrice }</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-semibold border-b pb-4">
            <span>Total:</span>
            <span>${products.totalPrice - products.totalDiscountPrice }</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" id="bank" />
              <label htmlFor="bank" className="flex items-center gap-2">
                Bank payment
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="payment" id="cod" />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>
          <div className="flex gap-2 md:w-[80%] p-5 rounded-[8px] shadow-xl ">
            <input type="text" placeholder="Coupon Code" className="flex-1 border px-2 py-1 rounded-md" />
            <button className="px-4 py-1 bg-[#DB4444] text-white rounded-md">Apply</button>
          </div>
          <button onClick={handlePlaceOrder} className="w-full md:w-[40%] font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;