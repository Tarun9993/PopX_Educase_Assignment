import React from 'react'
import profile from "../assets/profile.png"
import { IoCamera } from "react-icons/io5";
const Profile = () => {
  return (
    <div>
      <p className='bg-white p-[14px] border-b border-neutral-200'>Account Settings</p>
      <div className='absolute top-30 left-163'>
          <IoCamera  size={25} className='p-1 bg-[#6C25FF] cursor-pointer rounded-xl text-white'/>
          </div>
      <div className='flex  px-3 flex-col'>
        <div className='flex gap-8 px-1 mt-5'>
          <img src={profile} alt="profile_img" className='h-19'/>
        <div>
          <p className='font-bold'>Marry Doe</p>
          <p className='text-sm text-neutral-800 tracking-wide'>Marry@Gmail.Com</p>
        </div>
        </div>
        <div>
        <p className='mt-7 leading-6 text-sm text-neutral-800'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
      </div>
     <hr className="border-t border-dashed border-gray-400 my-4" />
    </div>
  )
}

export default Profile
