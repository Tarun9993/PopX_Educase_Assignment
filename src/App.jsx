import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className="bg-[#F7F8F9] min-h-screen px-2 max-w-[380px] mx-auto dark:text-shadow-none shadow-lg rounded-md">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;