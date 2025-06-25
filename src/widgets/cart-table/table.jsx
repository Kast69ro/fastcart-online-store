import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../../entities/cart/cart-slice";

const TableCart = () => {
  const products = useSelector((state) => state.cart.dataCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto p-5 rounded-2xl shadow-md">
      <table className="w-full text-left border-separate border-spacing-y-4 hidden md:table">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="w-[240px] font-medium pl-5">Product</th>
            <th className="font-medium text-center">Price</th>
            <th className="font-medium text-center">Quantity</th>
            <th className="font-medium text-center">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.productsInCart?.map((e) => (
            <tr key={e.id} className="bg-white rounded-xl shadow-sm">
              <td className="py-4 pl-5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 overflow-hidden rounded-xl border border-gray-200">
                    <img
                      src={`https://store-api.softclub.tj/images/${e.product.image}`}
                      alt={e.product.productName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{e.product.productName}</p>
                </div>
              </td>
              <td className="text-sm text-center font-semibold text-gray-700">{e.product.price}$</td>
                  <td>
                <div className="flex items-center justify-center gap-3">
                  <button  className="p-1 rounded-full border border-[#DB4444] hover:bg-[#DB4444]-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#DB4444">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  <span className="min-w-[24px] text-center text-sm">{e.quantity}</span>
                  <button  className="p-1 rounded-full border border-[#DB4444] hover:bg-[#DB4444]-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#DB4444">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="text-sm text-center font-semibold text-gray-700">
                {(e.product.price * e.quantity).toFixed(2)}$
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden flex flex-col gap-4">
        {products.productsInCart?.map((e) => (
          <div key={e.id} className="bg-white rounded-xl shadow p-4 space-y-3">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={`https://store-api.softclub.tj/images/${e.product.image}`}
                  alt={e.product.productName}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">{e.product.productName}</p>
                <p className="text-sm text-gray-600">{e.product.price}$</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Quantity: {e.quantity}</p>
              <p className="text-sm font-semibold">{(e.product.price * e.quantity).toFixed(2)}$</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Link to="/products">
          <button className="border-black text-black hover:bg-black/10">
            Return to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TableCart;
