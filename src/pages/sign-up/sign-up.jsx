import { useState, useEffect } from "react";
// import { logIn, resetStatus } from "../../entities/log-in/log-in";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {resetStatus} from '../../entities/slices/log-in/log-in'

import { Toaster } from "sonner";
import { logIn } from "../../entities/api/login/login";

export default function Sign() {
  const statusCode = useSelector((state) => state.login.statusCode);
  const errorStatus = useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (statusCode == 200) {
      navigate("/");
      dispatch(resetStatus());
    } else if (statusCode && statusCode !== 200) {
      setShowError(true);
    }
  }, [statusCode, navigate, dispatch]);

  const handleAdd = () => {
    dispatch(logIn({ userName: userName, password: userPassword }));
  };

  return (
    <>
    <div className=" flex w-[90%]  flex-col mt-[70px]  gap-[40px] lg:w-[30%]  mx-auto ">
      <div>
        <h2 className="text-[30px] lg:text-[40px] font-bold">
          Log in to Exclusive
        </h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="email"
          placeholder="User name "
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
          />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="text"
          placeholder="password"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
          />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="flex  justify-center gap-[20px] p-[10px_20px] text-[#DB4444]  ">
          Forget Password?
        </p>
        <button
          className="bg-[#DB4444] p-[10px_20px] rounded text-[#fff]"
          onClick={handleAdd}
          >
          Log In
        </button>
        
      </div>
      
    </div>
    <Toaster richColors position="bottom-right" />
          </>
  );
}
