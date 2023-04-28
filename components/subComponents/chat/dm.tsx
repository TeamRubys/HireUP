import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import { initializeSocket } from './chatHelpers/socketConnection';
import axios from 'axios'
function Dm({recipient, chats, setNewChat, userId}) {

  const [messages, setMessages] = useState([])

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState(userId)

  const updateScroll = () => {
    var element = document.getElementById("chatlogs");

    if(element) {
      element.scrollTop = element.scrollHeight;
    }
}


updateScroll();

  useEffect(() => {
    const cleanup = initializeSocket(user, setMessages, setSocket);
    return cleanup;
  }, []);

  useEffect(() => {
    if(chats) {
      setMessages(chats.messages)
    }
  }, [chats])

  useEffect(() => {
    updateScroll();
  }, [messages])


  const [input, setInput] = useState("");

  const sendMessage = (message, user) => {
    console.log(user)
    socket.emit('sendMessage', {roomName: recipient, message: {sender_id: user, receiver_id: recipient, context: message}});
    setMessages((messages) => [...messages, {sender_id: user, receiver_id: recipient, context: message}]);
    axios.post('/api/messages', {sender_id: user, receiver_id: recipient, context: message})
    .then((res) => {
      console.log("message posted to DB")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(messages)

  return (
    <>
      <div id="chatlogs" className="flex flex-col mt-auto mr-auto h-[99%] w-[99%] overflow-y-auto scrollbar-hide">
        {messages ? (
          messages.map((message, idx) => {
            {return message.sender_id===user ? (
              <div key={idx} className="rounded-lg bg-green-600 m-1 p-1 ml-auto w-[50%]">
                <p style={{wordWrap: "break-word"}} key={idx}>{message.context}</p>
              </div>
            ):(
              <div className="rounded-lg bg-blue-600 m-1 p-1 mr-auto w-[50%]">
                <p style={{wordWrap: "break-word"}} key={idx}>{message.context}</p>
              </div>
            )}
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="absolute z-50 flex h-[5%] w-[96%] justify-between bottom-[3%] left-[2%]">
         <div className="w-[70%] ml-[18%]">
         <input
          className="w-[100%] h-[100%] rounded-lg bg-gray-400"
          value={input}
          placeholder="Enter Message..."
          onChange={(e) => setInput(e.target.value)}
          ></input>
         </div>
         <div className="w-[10%]">
         <button
          className="w-[100%] h-[100%] rounded-lg bg-gray-400"
          onClick={() => {sendMessage(input, user); setInput("")}}
          >{">"}</button>
         </div>
      </div>
    </>
  );
}

export default Dm;