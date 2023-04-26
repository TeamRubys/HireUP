import React, {useState,useEffect} from 'react'
import freelancersController from '../../../server/controllers/freelancersController';
import { FreelancerData } from '../../../interfaces';

function AboutMe (props: {userId: number, setUserId:Function, userData:FreelancerData}) {
  const {userId, setUserId, userData} = props;

  return (
    <div className = 'flex flex-col h-3/4  sm:h-fit w-1/4 justify-center border-2 rounded border-gray p-5 mr-10'>
      <div className='flex-col justify-center p-5 '>
              <div className='flex flex-col justify-center'>
                  <div className='flex  justify-center items-center   w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <span className="flex flex-col justify-center font-medium text-gray-600 dark:text-gray-300">BB</span>
                  </div>
                  <p className='flex p-1 justify-center'>{userData.freelancer_name}</p>
              </div>

              <br></br>

              <div className='flex flex-shrink-0 flex-col justify-center p-1 border-2 rounded border-gray'>
                <p className='flex p-1 justify-center'>About Me</p>
                <p className='flex p-1 justify-center'>As an experienced software engineer with a long career in the field, I have been exposed to a wide range of technologies and stacks, from legacy systems to cutting-edge frameworks. My expertise includes software design and architecture, full-stack development, database management, cloud computing, and DevOps practices. Throughout my career, I have consistently demonstrated a strong work ethic, attention to detail, and a passion for solving complex technical challenges. I am constantly seeking opportunities to learn and grow as a professional, and I am excited to bring my skills and experience to a new team.</p>
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
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Connect</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Message</button>
              </div>
      </div>
      <div className='flex-col justify-center p-5 '>
      <div className='flex flex-shrink-0 flex-col justify-center p-1 '>
                <h1 className='flex p-1 justify-center'>Connections</h1>
                <br></br>
                <div className = 'flex flex-shrink-0 justify-evenly'>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">JU</span>
                  </div>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">JJ</span>
                  </div>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">EM</span>
                  </div>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">ZT</span>
                  </div>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">BJ</span>
                  </div>
                  <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">RT</span>
                  </div>
                </div>
              </div>
      </div>
    </div>

  )
}

export default AboutMe;