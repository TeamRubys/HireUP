import React from "react";

function Connections (props: {userId: number, setUserId:Function}) {
  const {userId, setUserId} = props;
  let onClickConnection = (e) =>{
    if (userId === 1) {
      setUserId(2)
    }
    if (userId === 2) {
      setUserId(1)
    }

  }
  return (
    <div className='flex-col justify-center p-5 '>

    <div className='flex flex-shrink-0 flex-col justify-center p-1 '>
      <div className='flex-col justify-center p-5 '>
            <div className='flex flex-shrink-0 flex-col justify-center p-1 '>
              <h1 className='flex p-1 justify-center'>Connections</h1>
              <br></br>
              <div className = 'flex  '>
                <div onClick={onClickConnection} className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <span onClick={onClickConnection} className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">JU</span>
                </div>
                {/* <div className='flex justify-center items-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <span className="flex justify-center  font-medium text-gray-600 dark:text-gray-300">JJ</span>
                </div> */}
              </div>
            </div>
        </div>
        </div>
        </div>
  )
};

export default Connections;