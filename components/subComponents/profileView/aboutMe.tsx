import React, {useState,useEffect} from 'react'
import freelancersController from '../../../server/controllers/freelancersController';
import { FreelancerData, ConnectionsType } from '../../../interfaces';
import Connections from './connection';
import axios from 'axios';

function AboutMe (props: {userId: number, setUserId:Function, userData:FreelancerData, connectionsList:ConnectionsType}) {
  const {userId, setUserId, userData, connectionsList} = props;


  //onClickConnect
  //  model pops up and confirms connection, then...
  //  get signed in userId and profile userId
  //  make a post request to connection with both Ids in params
  //  if no errors are returned, use effect on the page to refresh connections
  //  new bubble appears in connections element
  //  'Connect' button changes to 'Connected'

  //onClickMessage
  //  Opens up chat window with user
  let onClickConnection = () => {
    axios.post('api/connections', {
      user_id: 48,
      friend_id:1
    })
      .then(res => console.log('successful connection'))
      .catch(err => console.log('try again, bucko',err))
  }

  return (
    <div className = 'flex h-3/4 flex-col justify-center border-2 rounded border-gray p-5 mr-10'>
      <div className='flex-col justify-center p-5 '>
              <div className='flex flex-col justify-center'>
                  <div className='flex  justify-center items-center   w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <span className="flex flex-col justify-center font-medium text-gray-600 dark:text-gray-300">BB</span>
                  </div>
                  <p className='flex p-1 justify-center'>{userData.freelancer_name}</p>
              </div>

              <br></br>

              <div className='flex flex-shrink-0 flex-col justify-center p-1'>
                <div className='flex p-1 justify-evenly'>Skills</div>

                  {userData.skills.map((skill, i)=> (
                    <p key={i} className='flex justify-center '>{skill}</p>
                  ))}

                {/* <p className='flex p-1 justify-center border-2 rounded border-gray'> {userData.skill}</p> */}
              </div>

              <br></br>

              <div className = 'flex flex-shrink-0 justify-evenly'>
                <button onClick={onClickConnection} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Connect</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Message</button>
              </div>

                   <Connections userId={userId} setUserId={setUserId} connectionsList={connectionsList}/>
      </div>
    </div>

  )
}

export default AboutMe;