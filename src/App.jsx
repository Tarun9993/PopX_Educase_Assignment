import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
const App = () => {
  return (
    <div className="bg-[#F7F8F9] min-h-screen shadow-xl dark:text-shadow-none 
    px-4 mx-[580px]">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </div>
  )
}

export default App
