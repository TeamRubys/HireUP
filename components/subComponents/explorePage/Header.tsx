import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import userpic from "./user_default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket,faUser} from "@fortawesome/free-solid-svg-icons";

interface Props {
  setPage: (page: number) => void;
  page: number;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setCurrentPage: (currentPage: number) => void;
  userInfo: { nickname: string };
}

function Header(props: Props) {
  const { setPage, page, isLoggedIn, setIsLoggedIn, setCurrentPage, userInfo } =
    props;

  const [showMenu, setShowMenu] = useState(false);

  const handleTogglePage = () => {
    setPage(page === 0 ? 1 : 0);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleUserClick = () => {
    setCurrentPage(3);
  };

  return (
    <><div className="flex justify-center">
      <header className="w-full bg-transparent text-white p-4" style={{ height: '10vh', width: '80%' }}>
        <div className="flex items-center">
          <Image
            src={logo}
            alt='logo'
            width='120'
            height='120'
          />
          <div className="ml-auto">
          {(isLoggedIn) ? (
      <div className="flex items-center" style={{display:'flex', justifyContent: 'flex-end'}}>
        <a
        className="mx-auto mr-10 text-black text-xl hover:underline hover:text-green-500 cursor-pointer"
        onClick={handleTogglePage}
        >
        {page === 0 ? "Find Freelancers" : "Find Jobs"}
        </a> 
      <img src={userpic.src} alt="Profile" className="rounded-full mr-2 cursor-pointer" style={{width:'10%', height:'10%'}} onClick={()=>{setShowMenu(!showMenu)}} />
      <div className="mr-2">
        <p className="text-sm font-medium text-gray-900">{userInfo.nickname}</p>
        <p className="text-sm text-gray-500">Welcome!</p>
      </div>
      {showMenu && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50" style={{right: '10%', top: '10%'}}>
          <div className="py-1">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleUserClick}>
              <span className="mr-2">Profile</span>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => { handleSignOut(); setShowMenu(false) }}>
              <span className="mr-2">Logout</span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </div>
        </div>
      )}
    </div>
) : (
  <div className="flex mt-3">
            <a
        className="flex items-center mr-10 text-black text-xl hover:underline hover:text-blue-500 cursor-pointer"
        onClick={handleTogglePage}
        >
        {page === 0 ? "Find Freelancers" : "Find Jobs"}
        </a> 
    <Link href="/api/auth/login">
      <button className="bg-green-200 hover:bg-green-400 text-white rounded-md py-2 px-4 mr-2 shadow-lg">Login</button>
    </Link>
    <Link href="/api/auth/login">
      <button className="bg-green-300 hover:bg-green-500 text-white rounded-md py-2 px-4 shadow-lg">Sign Up</button>
    </Link>
  </div>
)}
          </div>
        </div>
      </header>
    </div>
    <div className="flex justify-center">
    <div className="border-b" style={{ width: '80%' }}></div>
  </div>
    </>
  );
}

export default Header;