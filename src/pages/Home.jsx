import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/sign-up");
  };
  const handleLoginClick = () => {
    navigate("/sign-in");
  };
  return (
    <div className='flex flex-col justify-end min-h-screen p-3'>
      <div className="mb-8">
        <h1 className='font-extrabold text-[#1D2226] text-2xl py-1 tracking-wide'>Welcome to PopX</h1>
        <p className='py-1 text-neutral-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <button
          onClick={handleSignInClick}
          className='bg-[#642AF5] p-3 cursor-pointer rounded-md font-bold text-white transition-colors duration-200 hover:bg-[#5222c5]'
        >
          Create Account
        </button>
        <button
          onClick={handleLoginClick}
          className='bg-[#CEBAFB] p-3 hover:bg-[#B897F2] cursor-pointer rounded-md font-bold text-black transition-colors duration-200'
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;