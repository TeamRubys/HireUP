import React from 'react'
import AboutMe from './subComponents/profileView/aboutMe';
import Profile_information from './subComponents/profileView/professional_info';
import Footer from './subComponents/explorePage/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FreelancerData } from '../interfaces';
import Header from './subComponents/landingPage/header'

function ProfileView({setCurrentPage}) {
  const [userId, setUserId] = useState<number> (2);
  const [user, setUser] = useState('John')
  const [userData, setUserData] = useState<FreelancerData>({
    freelancer_name: 'Sample User',
    rate:'$5000/hr',
    portfolio:['sample.github.com'],
    skills: ['React', 'JaveScript'],
    work_history:[{
      company: "Little Folk Shops",
      duration: "48 ",
      position: "Logging Equipment Operator",
      description:'The description of the job helps recruiters see what the freelancer was doing in previous employment'}],
    location: 'remote',
    education:'HackReactor 12-week Immersive'
  });
  useEffect(() => {
    axios.get(`api/freelancers/${userId}`)
    .then(res => {
      if(res.data) {
        setUserData(res.data)}
      })
  }, [userId])

  return (
    <div>
      <Header user={user} setUser={setUser} handleProfile={() => {setCurrentPage(4)}}/>


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