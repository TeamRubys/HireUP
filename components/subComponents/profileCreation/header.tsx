import Head from 'next/head';
import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import logo from '../landingPage/logo.png'
import Link from 'next/link';
import userpic from '../landingPage/user_default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

interface HeaderProp {
  user: string;
}

const Header = ({user}:HeaderProp) => {
  const [showMenu, setShowMenu] = useState(false);

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
          <h1 className="text-lg font-bold ml-4">Hire Up</h1>
          <div className="ml-auto">
          {(user!=='') ? (
      <div className="flex items-center" style={{display:'flex', justifyContent: 'flex-end'}}>
      <img src={userpic.src} alt="Profile" className="rounded-full mr-2 cursor-pointer" style={{width:'10%', height:'10%'}} onClick={()=>{setShowMenu(!showMenu)}} />
      <div className="mr-2">
        <p className="text-sm font-medium text-gray-900">{user}</p>
        <p className="text-sm text-gray-500">Welcome!</p>
      </div>
      {showMenu && (
        <div className="absolute mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50" style={{right: '10%', top: '10%'}}>
          <div className="py-1">
            <Link href="/api/auth/logout">
              <button className="w-full flex text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={()=>{setShowMenu(false);}}>
                <span className="mr-2">Logout</span>
                <FontAwesomeIcon className="-mt-1 w-3/12" icon={faArrowRightFromBracket} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
) : (
  <div className="flex">
    <Link href="/login">
      <button className="bg-green-200 hover:bg-green-400 text-white rounded-md py-2 px-4 mr-2 shadow-lg">Login</button>
    </Link>
    <Link href="/register">
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