import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleSignInClick =() =>{
    navigate("/sign-up")
  }
  const handleLoginClick = () =>{
    navigate("/sign-in")
  }
  return (
    <div className='flex flex-col justify-end h-screen p-4'>
      <h1 className='font-extrabold text-[#1D2226] text-2xl py-1 tracking-wide'>Welcome to PopX</h1>
      <p className='py-1 text-neutral-500 text-lg max-w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex flex-col gap-2 py-5'>
      <button onClick={handleSignInClick} className='bg-[#642AF5] p-[9px] cursor-pointer rounded-md font-bold text-white'>Create Account</button>
      <button onClick={handleLoginClick} className='bg-[#CEBAFB] p-[9px] hover:bg-[#B897F2] cursor-pointer rounded-md font-bold text-black'>Already Registered? Login</button>
      </div>
    </div>
  )
}

export default Home
