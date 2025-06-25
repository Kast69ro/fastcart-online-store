
// import Roadmap from "@shared/ui/custom/roadmap";
import TableCart from "../../widgets/cart-table/table";
import { useSelector } from "react-redux";
// import { Button } from "@shared/ui/kit/button";
import { Link } from "react-router-dom";

const Cart = () => {
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <TableCart />
      <div className="flex justify-end">
        <div className="w-full max-w-md flex flex-col gap-5 p-6 rounded-2xl border-2 border-black shadow-lg bg-white">
          <h4 className="text-2xl font-bold text-center">Cart Summary</h4>

          <div className="flex justify-between text-lg">
            <span className="text-gray-600">Subtotal:</span>
            {/* <span className="font-medium">${totalPrice}</span> */}
          </div>

          <div className="flex justify-between text-lg">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium">Free</span>
          </div>

          <hr className="border-t-2 border-gray-300" />

          <div className="flex justify-between text-xl font-semibold">
            <span>Total:</span>
            {/* <span>${totalPrice}</span> */}
          </div>

          <div className="pt-4">
            <Link to="/checkout">
              <button className="w-full h-[50px] text-lg rounded-xl">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;