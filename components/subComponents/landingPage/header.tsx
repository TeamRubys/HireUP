import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import logo from './logo.png'

const Header = () => {
  return (
    <><div className="flex justify-center">
      <header className="w-full bg-transparent text-white p-4" style={{ height: '10vh', width: '80%' }}>
        <div className="flex items-center">
          {/* <div className="w-12 h-12 bg-gray-500 rounded-full"></div> */}
          <Image
            src={logo}
            alt='logo'
            width='120'
            height='120'
          />
          <h1 className="text-lg font-bold ml-4">Hire Up</h1>
          <div className="ml-auto">
          <button className="bg-green-200 text-white rounded-md py-2 px-4 mr-2">Login</button>
          <button className="bg-green-300 text-white rounded-md py-2 px-4">Sign Up</button>
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