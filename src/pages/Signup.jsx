import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
   e.preventDefault();
   navigate("/profile");
};

  return (
     <div className="flex flex-col p-4">
      <h2 className="text-2xl max-w-64 tracking-wide font-extrabold text-[#1D2226] mb-4">
        Create your PopX account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-3">
        <div className="relative flex flex-col">
          <label htmlFor="name" className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
            className="mt-1 p-2 border border-[#E1E1E2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FB7C7C]"
          />
        </div>
        <div className="relative flex flex-col">
          <label
            htmlFor="phone"
            className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none"
          >
            Phone number
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Enter your phone number"
            required
            className="mt-1 p-2 border border-[#E1E1E2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FB7C7C]"
          />
        </div>
        <div className="relative flex flex-col">
          <label
            htmlFor="email"
            className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            className="mt-1 p-2 border border-[#E1E1E2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FB7C7C]"
          />
        </div>
        <div className="relative flex flex-col">
          <label
            htmlFor="pwd"
            className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none"
          >
            Password
          </label>
          <input
            type="password"
            id="pwd"
            placeholder="Enter your password"
            required
            className="mt-1 p-2 border border-[#E1E1E2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FB7C7C]"
          />
        </div>
        <div className="relative flex flex-col">
          <label
            htmlFor="comp-name"
            className="absolute left-3 -top-3 px-1 text-base font-medium bg-gray-50 text-purple-600 pointer-events-none"
          >
            Company Name
          </label>
          <input
            type="text"
            id="comp-name"
            placeholder="Enter your company name"
            required
            className="mt-1 p-2 border border-[#E1E1E2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FB7C7C]"
          />
        </div>
        <div className="relative flex flex-col">
          <span className="text-sm font-medium text-[#6C25FF] after:content-['*'] after:text-red-500">
            Are you an Agency?
          </span>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="Yes" required />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="No" required />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className='flex justify-end mt-40'>
        <button
          type="submit"
          className="w-full cursor-pointer  bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold py-2 rounded-md"
        >
          Create Account
        </button>
        </div>
      </form>
    </div>
  );
};


export default Signup
