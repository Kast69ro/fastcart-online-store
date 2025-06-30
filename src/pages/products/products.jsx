
import { useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../entities/api/home/home";

import { addToCart } from "../../entities/api/cart/cart";
import FilterProduct from "../../widgets/filter-product/filter";
import { getProductById } from "../../entities/api/products/products";
import { Link } from "react-router-dom";

export default function Products() {
  const product = useSelector((state) => state.home.dataProduct);
  const wishlist = useSelector((state) => state.wishlist.items || []);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleAdd = (id) => {
    if (localStorage.getItem("token") != null) {
      dispatch(addToCart(id));
    } else {
      navigate("/log-in");
    }
  };
  
  
    const toggleWishlist = (product) => {
      if (localStorage.getItem("token") == null) {
        toast.error("Please log in to use wishlist");
        return;
      }
      const exists = wishlist.some((item) => item.id === product.id);
      if (exists) {
        dispatch(removeItem(product.id));
        toast.error("Removed from wishlist");
      } else {
        dispatch(addItem(product));
        toast.success("Added to wishlist");
      }
    };




  return (
    <>
      <div className="flex justify-around items-center ">
        
        
      </div>
      <section className="flex lg:justify-around flex-wrap mt-[80px] items-center">
        <aside className=" lg:w-[20%]">
          <div className="w-[300px]">
            <FilterProduct/>
          </div>
        </aside>

        <aside className=" flex flex-wrap w-[70%] gap-[20px] justify-start m-auto md:m-0 mt-[40px]">
          {product.map((el) => {
            return (
              <div
                key={el.id}
                className="relative group overflow-hidden w-[100%] lg:w-[40%] bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  -1{el.discountPrice}%
                </div>

               <div className="absolute top-2 right-2 flex flex-col gap-2">
                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                  <Link
                    to="/info"
                    onClick={() => dispatch(getProductById(el.id))}
                    className="inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                  <button
                    onClick={() => toggleWishlist(el)}
                    className="inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        !localStorage.getItem("token")
                          ? "#ccc"
                          : wishlist.some((item) => item.id === el.id)
                          ? "red"
                          : "none"
                      }
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

                <div className="w-full h-40 flex items-center justify-center">
                  <img
                    src={"http://37.27.29.18:8002/images/" + el.image}
                    alt={el.productName}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium">{el.productName}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-red-500 font-semibold">
                    ${el.price}
                  </span>
                </div>
                <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐ </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <button
                    className="w-full bg-black text-white py-2 rounded-b-xl text-sm font-medium"
                    onClick={() => handleAdd(el.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </aside>
      </section>
    </>
  );
}
