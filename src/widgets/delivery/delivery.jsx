import React from "react";

const Delivery = () => {
  return (
    <div className="border-[2px] border-[#BFBFBF] rounded-[4px]">
      <div className="flex items-center gap-4 px-5 py-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <div>
          <h4 className="text-[20px]">Free Delivery</h4>
          <p className="underline text-[14px]">Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <hr className="h-[2px] bg-[#BFBFBF] border-none" />
      <div className="flex items-center gap-4 px-5 py-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        <div>
          <h4 className="text-[20px]">Return Delivery</h4>
          <p className="text-[14px]">
            Free 30 Days Delivery Returns. <span className="underline"> Details </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;