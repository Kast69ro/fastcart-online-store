import icon from "#/Icon-Google.png";
export default function CreateAccout() {
  return (
    <div className=" flex w-[90%]  flex-col mt-[50px]  gap-[30px] lg:w-[30%]  mx-auto ">
      <div>
        <h2 className="text-[30px] lg:text-[40px] font-bold">Create an account</h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="Name"
          className="p-[10px_20px] border-[1px] border-[grey]  rounded"
        />
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
        <input
          type="text"
          placeholder="password"
          className="p-[10px_20px] border-[1px] border-[grey] rounded"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <button className="bg-[#DB4444] p-[10px_20px] rounded text-[#fff]">
          Create Account
        </button>
        <button className="flex border justify-center gap-[20px] p-[10px_20px] rounded">
          <img src={icon} alt="" />
          Sign up with Google
        </button>
        <p className="flex  justify-center gap-[20px] p-[10px_20px]  ">
          Already have account? <span className="border-b">Log in</span>
        </p>
      </div>
    </div>
  );
}
