import React from "react";

function Chat({setCurrentPage, isLoggedIn}) {

  const handleChatClick = () => {
    if(isLoggedIn) {
      setCurrentPage(6)
    } else {
      alert('Please login or sign up to use website features');
    }
  }

  return (
    <div>
      <button className="fixed bottom-8 right-8 bg-black text-white font-bold hover:bg-blue-700 rounded-full w-12 h-12 border-none outline-none cursor-pointer" onClick={handleChatClick}>
        Chat
      </button>
    </div>
  );
}

export default Chat;
