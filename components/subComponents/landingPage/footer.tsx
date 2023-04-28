import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { faLinkedin, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.png'

const Footer = () => {
  return (
    <footer className="mx-auto p-4 bg-green-300" style={{width:'80%'}}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-opacity-50 p-2 rounded-md mr-4">
            <Image
            src={logo}
            alt='logo'
            width='120'
            height='120'
          />
          </div>
          <ul className="flex justify-center items-center text-white">
            <li className="mx-4">
              <a href="#" className="hover:text-grey-400">
              1234 Fifth Ave.
              New Orleans, LA 12345
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="hover:text-grey-400">
              +1 123-456-7890
              </a>
            </li>
            <li className="mx-4">
              <FontAwesomeIcon icon={faLinkedin} size='1x' className="hover:text-grey-400" />
            </li>
            <li className="mx-4">
              <FontAwesomeIcon icon={faGithub} size='1x' className="hover:text-grey-400" />
            </li>
            <li className="mx-4">
              <FontAwesomeIcon icon={faTwitter} size='1x' className="hover:text-grey-400" />
            </li>
            <li className="mx-4">
              <FontAwesomeIcon icon={faYoutube} size='1x' className="hover:text-grey-400" />
            </li>
          </ul>
        </div>
        <div className="text-white">
          HireUp Corporation © 2023
        </div>
      </div>
    </footer>
  );
}
export default Footer;