export default function Account() {
  return (
    <div className="p-[20px] flex flex-col lg:flex-row lg:mx-auto lg:max-w-[1000px] lg:gap-[60px]">
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

      <div className="shadow-[0px_0px_10px_0px] p-[20px] rounded w-full lg:w-[50%]">
        <div className="flex flex-col gap-[20px]">
          <div>
            <h2 className="text-2xl font-semibold">Profile</h2>
            <div className="flex flex-col gap-[20px] lg:flex-row">
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">First name</legend>
                <input
                  type="text"
                  placeholder="Введите email"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">Last name</legend>
                <input
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
                <legend className="text-sm text-gray-600 px-2">Email address</legend>
                <input
                  type="text"
                  placeholder="Введите email"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
              <fieldset className="border border-gray-400 rounded">
                <legend className="text-sm text-gray-600 px-2">Street address</legend>
                <input
                  type="text"
                  placeholder="Введите email"
                  className="w-full p-2 border-gray-300 rounded outline-none focus:border-blue-500"
                />
              </fieldset>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-2xl font-semibold mt-[30px]">Password Changes</h2>

          <div className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="password"
              placeholder="Введите старый пароль"
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <div className="lg:flex lg:gap-[20px]">
              <input
                type="password"
                placeholder="Введите новый пароль"
                className="w-full lg:w-[48%] p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
              <input
                type="password"
                placeholder="Повторите новый пароль"
                className="w-full lg:w-[48%] p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-end">
            <button>Cancel</button>
            <button className="bg-[#DB4444] p-[10px_20px] rounded text-[#fff]">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
