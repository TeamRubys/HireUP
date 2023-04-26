import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mx-auto p-4" style={{width:'80%'}}>
    <div className="flex justify-center items-center">
      <nav className="flex justify-center mt-4">
        <ul className="flex justify-center items-center">
          <li className="mx-4">
            <a href="#" className="text-black hover:text-grey-400">
              HireUp Corporation © 2023
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-black hover:text-grey-400">
              About
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-black hover:text-grey-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  );
}

export default Footer;