import React from 'react'
import AboutMe from './subComponents/profileView/aboutMe';
import Profile_information from './subComponents/profileView/professional_info';
import Footer from './subComponents/explorePage/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FreelancerData } from '../interfaces';


function ProfileView() {
  const [userId, setUserId] = useState<number> (3);
  const [userData, setUserData] = useState<FreelancerData>({
    freelancer_name: 'Sample User',
    rate:'$5000/hr',
    portfolio:['sample.github.com'],
    skills: ['React', 'JaveScript'],
    work_history:[{
      company: "Little Folk Shops",
      duration: "48 ",
      position: "Logging Equipment Operator"}],
    location: 'remote',
    education:'HackReactor 12-week Immersive'
  });
  useEffect(() => {
    axios.get(`api/freelancers/${userId}`)
    .then(res => {
      if(res.data) {
        setUserData(res.data)}
      })
  }, [])

  return (
    <div>
      <div className='border-2 rounded border-black p-1'>
        <nav className="bg-white border-gray-200 dark:bg-brand-dark-green">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HireUp</span>
        </div>
        </nav>
      </div>
      <br></br>

      <div className = 'flex p-5'>
        <div className='flex justify-center'>
          <AboutMe userData={userData} userId={userId} setUserId={setUserId}/>
          <Profile_information userData={userData} userId={userId} setUserId={setUserId}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfileView;