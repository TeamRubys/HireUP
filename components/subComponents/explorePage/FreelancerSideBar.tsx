import React,{useState} from 'react';
import ChatBox from "../../chat";

function FreelancerSideBar({isLoggedIn, setCurrentPage, savedFreelancers}) {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const handleChatMessage = () =>{
    if (isLoggedIn) { 
      setIsChatVisible(true);
    } else {
      alert('Please login or sign up to use website features');
    }
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
                  <button className="hover:bg-gray-100 font-bold py-2 px-4 rounded border border-grey-300" onClick={handleChatMessage}>
                    Message
                  </button>
                  {isChatVisible && (
        <div>
          <div className="modal-overlay" onClick={() => setIsChatVisible(false)}></div>
          <div className="modal-content">
            <ChatBox sendTo={20} setState={undefined} />
          </div>
        </div>
      )}
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
