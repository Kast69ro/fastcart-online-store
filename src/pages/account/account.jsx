import { useSelector } from "react-redux";

export default function Account() {
  const user = useSelector((state) => state.account.user);
  

  return (
    <div className="p-[20px] lg:items-center flex flex-col lg:flex-row lg:mx-auto lg:max-w-[1000px] lg:gap-[60px] max-w-[1920px] w-full">
      <div className="flex flex-col gap-[20px] lg:w-[40%]">
        <div>
          <h2 className="font-bold">Manage My Account</h2>
          <div className="ml-[20px]">
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">My Orders</h2>
          <div className="ml-[20px]">
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </div>
        </div>
        <h2 className="font-bold">My WishList</h2>
      </div>

      <div className="shadow-[0px_0px_10px_0px] mt-[40px] p-[20px] rounded w-full lg:w-[50%] lg:mt-0 ">
        <div className="flex justify-center">
          {user?.image ? (
            <img
              className="rounded-[50%] w-[200px] h-[200px]"
              src={`http://37.27.29.18:8002/images/${user.image}`}
              alt="user"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[200px] h-[200px] text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          )}
        </div>

        <div className="flex flex-col gap-[20px]">
          <div>
            <h2 className="text-2xl font-semibold">Profile</h2>
            <div className="flex flex-col gap-[20px] lg:flex-row">
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">
                  First name
                </legend>
                <input
                  value={user.firstName}
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">
                  Last name
                </legend>
                <input
                  value={user.lastName}
                  type="text"
                  placeholder="Введите email"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[20px] lg:flex-row">
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">
                  Email address
                </legend>
                <input
                  value={user.email}
                  type="text"
                  placeholder="Введите email"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">
                  Phone number
                </legend>
                <input
                  value={user.phoneNumber}
                  type="text"
                  placeholder="phone number"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
