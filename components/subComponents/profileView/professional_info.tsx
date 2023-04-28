import React from 'react';
import WorkHistory from './workHistory';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FreelancerData } from '../../../interfaces';

function Profile_information (props: {userId: number, setUserId:Function, userData:FreelancerData}) {
  const {userId, setUserId, userData} = props;
  // axios.get(`api/freelancers/${userId}`)
  //   .then(res => setUserData(res.data))

  return (
    <div className = 'flex justify-center border-2 rounded border-gray p-10'>
      <div>
        <h1 className='font-semibold'>Basic Information</h1>
          <div className='flex flex-col border-2 rounded border-gray p-1'>
            <div className='flex p-1 font-medium'>
              Email:
              <p className='ml-1'> {userData.freelancer_name}</p>
            </div>
            <div className='flex p-1 font-medium'>Rate:
              <p className='ml-1'>{userData.rate}</p>
            </div>
            <div className='flex p-1 font-medium'>
              Portfolio:
            <a className='ml-1' href='github.com'>{userData.portfolio[0]}</a> </div>
            <div className='flex p-1 font-medium'>
              Location:
              <p className='ml-1'>{userData.location}</p> </div>
          </div>
          <br></br>
        <h1 className='font-semibold'>Work History</h1>
          <div className='flex-1 '>

              <WorkHistory workHistory={userData.work_history}/>

          </div>
          <br></br>
        <h1 className='font-semibold py-1 '>Education</h1>
          <div className='border-2 rounded border-gray'>
            <ul>
            <li className='p-1'>{userData.education}</li>
            </ul>
          </div>
      </div>
    </div>
  )
};

export default Profile_information;