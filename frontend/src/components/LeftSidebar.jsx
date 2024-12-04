import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const LeftSidebar = () => {
  return (
    <>
      <div>
        <div className='ml-2'>
            <img 
            src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" alt="twitter-logo"
            width={"45px"}
            />
        </div>
        <div className='my-4'>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <CiHome size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Home</h1>
            </div>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <CiHashtag size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <IoIosNotificationsOutline size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
            </div>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <CiUser size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </div>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <CiBookmark size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <div className='flex items-center my-2 hover:bg-gray-200 rounded-full px-4 py-2 cursor-pointer'>
            <AiOutlineLogout size={"24px"} />
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
            <button className='px-4 py-2 border-none text-md bg-[#109bf0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
      </div>
    </>
  )
}

export default LeftSidebar