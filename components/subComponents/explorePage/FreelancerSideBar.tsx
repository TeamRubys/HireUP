import React from 'react';

function FreelancerSideBar({setCurrentPage}) {
  const handleChatMessage = () =>{
    setCurrentPage(6)
  }

  return (
    <div>
      <div id="saved" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Saved Freelancers:</div>
          <ul>
            <li className="flex justify-between items-center mb-2">
              Bobby
              <button className="hover:bg-blue-100 font-bold py-2 px-4 rounded border border-black" onClick={handleChatMessage}>
                Message
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FreelancerSideBar;
