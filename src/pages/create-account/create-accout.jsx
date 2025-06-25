import icon from "#/Icon-Google.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { postUser, resetStatus } from "../../entities/registrate/registrate";

export default function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const statusCode = useSelector((state) => state.registrate.statusCode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    const user = {
      userName,
      phoneNumber: userNumber,
      email: userEmail,
      password: userPassword,
      confirmPassword: userConfirmPassword,
    };

    dispatch(postUser(user));
  };

  useEffect(() => {
    if (statusCode == 200) {
      navigate("/log-in");
      dispatch(resetStatus()); 
    }
  }, [statusCode]);

  return (
    <div className="flex w-[90%] flex-col mt-[50px] gap-[30px] lg:w-[30%] mx-auto">
      <div>
        <h2 className="text-[30px] lg:text-[40px] font-bold">Create an account</h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>

      <form className="flex flex-col gap-[20px]" onSubmit={handleAdd}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value.trim())}
          type="text"
          placeholder="Name"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          value={userConfirmPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
          type="password"
          placeholder="Repeat password"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <button
          type="submit"
          className="bg-[#DB4444] p-[10px_20px] rounded text-[#fff]"
        >
          Create Account
        </button>
      </form>

      <button className="flex border justify-center gap-[20px] p-[10px_20px] rounded">
        <img src={icon} alt="" />
        Sign up with Google
      </button>

      <p className="flex justify-center gap-[10px] p-[10px_20px]">
        Already have account?{" "}
        <span className="border-b">
          <Link to="/log-in">Sign In</Link>
        </span>
      </p>
    </div>
  );
}
