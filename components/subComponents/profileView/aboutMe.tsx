import React, {useState,useEffect} from 'react'
import freelancersController from '../../../server/controllers/freelancersController';
import { FreelancerData, ConnectionsType } from '../../../interfaces';
import Connections from './connection';
import axios from 'axios';

function AboutMe (props: {userId: number, setUserId:Function, userData:FreelancerData, connectionsList:ConnectionsType}) {
  const {userId, setUserId, userData, connectionsList} = props;
  const [friend, setFriend] = useState();

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
      user_id: userId,
      friend_id:3
    })
      .then(res => console.log('successful connection'))
      .catch(err => console.log('try again, bucko',err))
  }

  return (


    <div className = 'border-2 rounded border-gray p-10 mr-10'>
      <div>

          <div className='flex flex-col justify-center'>
            <div className='flex justify-center'><SVGComponent/></div>
            <p className='flex justify-center'>{userData.freelancer_name}</p>
          </div>
          <br></br>

          <h1>Skills</h1>
            <div className='flex flex-wrap p-1 border-2 rounded border-gray'>
                  {userData.skills.map((skill, i)=> (
                    <p key={i} className='p-1 m-1 border-2 rounded border-gray-400'>{skill}</p>
                  ))}
            </div>
            <br></br>


            <div className = 'flex justify-evenly '>
                <button onClick={onClickConnection} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Connect</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Message</button>
            </div>
            <br></br>
          <Connections userId={userId} setUserId={setUserId} connectionsList={connectionsList}/>
      </div>
    </div>


  )
}



const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={70}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    {...props}
  >
    <defs />
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 45 88 c -11.049 0 -21.18 -2.003 -29.021 -8.634 C 6.212 71.105 0 58.764 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 13.765 -6.212 26.105 -15.979 34.366 C 66.181 85.998 56.049 88 45 88 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(214,214,214)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 45 60.71 c -11.479 0 -20.818 -9.339 -20.818 -20.817 c 0 -11.479 9.339 -20.818 20.818 -20.818 c 11.479 0 20.817 9.339 20.817 20.818 C 65.817 51.371 56.479 60.71 45 60.71 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(165,164,164)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 45 90 c -10.613 0 -20.922 -3.773 -29.028 -10.625 c -0.648 -0.548 -0.88 -1.444 -0.579 -2.237 C 20.034 64.919 31.933 56.71 45 56.71 s 24.966 8.209 29.607 20.428 c 0.301 0.793 0.069 1.689 -0.579 2.237 C 65.922 86.227 55.613 90 45 90 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(165,164,164)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default AboutMe;