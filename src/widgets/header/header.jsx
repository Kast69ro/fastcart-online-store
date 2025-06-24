import logo from "#/Group 1116606595.png";
import shop from "#/Cart1 with buy.png";
import user from "#/user.png";
import wish from "#/Wishlist.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-[10px_20px] border-b ]">
      <img className="hidden lg:block" src={logo} alt="" />
       <div className="flex items-center lg:hidden">
          <h1>=</h1>
          <h2 className="text-[24px] font-bold ">Exclusive</h2>
        </div>
      <div className="hidden lg:block ">
       
        <ul className="flex gap-[30px] list-none ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-[10px]">
        <input
          className="p-[10px_20px] rounded-[10px] border-none bg-[#f5f5f5] hidden lg:block"
          type="text"
          placeholder="What are you looking for?"
        />
        <img src={wish} alt="" />
        <img src={shop} alt="" />
        <img src={user} alt="" />
      </div>
    </div>
  );
}
