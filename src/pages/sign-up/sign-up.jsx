export default function Sign() {
  return (
    <div className=" flex w-[90%]  flex-col mt-[70px]  gap-[40px] lg:w-[30%]  mx-auto ">
      <div>
        <h2 className="text-[30px] lg:text-[40px] font-bold">Log in to Exclusive</h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        
        <input
          type="email"
          placeholder="Email "
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          type="text"
          placeholder="password"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        
        <p className="flex  justify-center gap-[20px] p-[10px_20px] text-[#DB4444]  ">
          Forget Password?
        </p>
        <button className="bg-[#DB4444] p-[10px_20px] rounded text-[#fff]">
          Log In
        </button>
      </div>
    </div>
  );
}
