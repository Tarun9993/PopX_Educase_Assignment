import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };


  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-2xl mt-5 tracking-wide mx-4 max-w-60 font-extrabold text-[#1D2226]">
          Signin to your PopX account
        </h2>
        <p className="text-gray-500 text-md tracking-wider mt-2 mx-4 max-w-60 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="mt-6 mx-5">
          <div className="relative mb-6 w-full">
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              className="block w-full border border-gray-300 rounded-md pt-4 pb-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-0 bg-gray-50"
            />
            <label htmlFor="fullname" className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none">
              Full Name
            </label>
          </div>
          <div className="relative mb-2 w-full">
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="block w-full border border-gray-300 rounded-md pt-4 pb-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-0 bg-gray-50"
            />
            <label htmlFor="password" className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none">
              Enter Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-4 font-semibold py-3 rounded-md transition-all duration-200 bg-[#6C25FF] text-white hover:bg-[#5a1fd1] cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
