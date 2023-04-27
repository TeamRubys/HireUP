import React from 'react';

function FreelancerSideBar({setCurrentPage, savedFreelancers}) {
  const handleChatMessage = () =>{
    setCurrentPage(6)
  }

  return (
    <div>
      <div id="saved" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Saved Freelancers:</div>
          {savedFreelancers.length > 0 ? (
            <ul>
              {savedFreelancers.map((freelancer, index) => (
                <li className="flex justify-between items-center mb-2" key={index}>
                  <span className="hover:text-green-500 hover:underline cursor-pointer" onClick={() => setCurrentPage(4)}>{freelancer}</span>
                  <button className="hover:bg-green-100 font-bold py-2 px-4 rounded border border-grey-300" onClick={handleChatMessage}>
                    Message
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic">No saved freelancers</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FreelancerSideBar;
