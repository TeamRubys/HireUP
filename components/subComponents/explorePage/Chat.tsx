import React from "react";

function Chat({setCurrentPage}) {

  const handleChatClick = () => {
    setCurrentPage(6)
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
