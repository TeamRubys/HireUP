import React from 'react'
import AboutMe from './subComponents/profileView/aboutMe';
import Profile_information from './subComponents/profileView/professional_info';
import Footer from './subComponents/explorePage/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FreelancerData, ConnectionsType } from '../interfaces';
import Header from './subComponents/landingPage/header'


function ProfileView({setCurrentPage, user, userID}) {
  const [loggedUserId, setLoggedUserId] = useState<number> (userID) //using sample user for logged in user;
  // const [freelancerUserId, setFreelancerUserId] = useState<number>(profileId)
  const [userName, setUserName] = useState(user.nickname || 'Login')
  const [userData, setUserData] = useState<FreelancerData>({
    freelancer_name: 'Sample User',
    rate:'$5000/hr',
    portfolio:['sample.github.com'],
    skills: ['React', 'JaveScript', 'Express', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL'],
    work_history:[{
      company: "Little Folk Shops",
      duration: "48 ",
      position: "Logging Equipment Operator",
      description:'The description of the job helps recruiters see what the freelancer was doing in previous employment'}],
    location: 'remote',
    education:'HackReactor 12-week Immersive'
  });
  const [connections, setConnections] = useState<ConnectionsType>([{friend_id:1 }]) //sample friend based on

  useEffect(() => {
    console.log(loggedUserId)
     axios.get(`/api/freelancers/${loggedUserId}`)
    .then(res => {
      console.log(res.data, 'IN MAIN PROFILE COMPONENT --- user ID')
      if(res.data) {
        setUserData(res.data)}
      })
    .catch(err => console.log(err));

    axios.get(`/api/connections/${loggedUserId}`)
    .then(res => {
      if(res.data) {
        setConnections(res.data)}
      })
      .catch(err => {
        console.log('Error in getting connections',err);
      })

  }, [loggedUserId])

  return (

    <div>
      <Header user={userName} setUser={setUserName} handleProfile={() => {setCurrentPage(4)}}/>
      <div className='flex justify-center'>
        <div className="flex justify-center flex-wrap w-full">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <AboutMe userData={userData} userId={loggedUserId} setUserId={setLoggedUserId} connectionsList={connections}/>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <Profile_information userData={userData} userId={loggedUserId} setUserId={setLoggedUserId}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfileView;