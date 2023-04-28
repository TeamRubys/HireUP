import React, { useState } from "react";
import ChatBox from "../../chat";

function Chat({isLoggedIn}) {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatClick = () => {
    if (isLoggedIn) { 
      setIsChatVisible(true);
    } else {
      alert('Please login or sign up to use website features');
    }
  }

  return (
    <div>
      <button className="fixed bottom-8 right-8 bg-green-400 text-white font-bold hover:bg-green-500 rounded-full w-12 h-12 border-none outline-none cursor-pointer" onClick={handleChatClick}>
        Chat
      </button>
      {isChatVisible && (
        <div>
          <div className="modal-overlay" onClick={() => setIsChatVisible(false)}></div>
          <div className="modal-content">
            <ChatBox sendTo={20} setState={undefined} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
