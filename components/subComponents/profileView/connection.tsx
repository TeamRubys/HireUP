import React, {useEffect, useState} from "react";
import axios from "axios";
import { ConnectionsType } from "../../../interfaces";


function Connections (props: {userId: number, setUserId:Function, connectionsList:ConnectionsType}) {
  const {userId, setUserId, connectionsList} = props;
  const [conns, setConns] = useState(connectionsList)

  let onClickConnection = (e) =>{
    setUserId(e.target.id)
  }


  return (
    <div className='flex-col justify-center p-5 '>

    <div className='flex flex-shrink-0 flex-col justify-center p-1 '>
      <div className='flex-col justify-center p-5 '>
            <div className='flex flex-shrink-0 flex-col justify-center p-1 '>
              <h1 className='flex p-1 justify-center'>Connections</h1>
              <br></br>
              <div className = 'flex'>
                {connectionsList.map((conns, i) =>  {
                  return (
                    <div key = {i + "K"} id = {`${conns.friend_id}`} onClick={onClickConnection} className='flex justify-center items-center px-1  w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                        <span id = {`${conns.friend_id}`} onClick={onClickConnection} className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">
                        `${conns.friend_id}`
                        </span>
                    </div>
                  )
                })}


              </div>
            </div>
        </div>
        </div>
        </div>
  )
};

export default Connections;