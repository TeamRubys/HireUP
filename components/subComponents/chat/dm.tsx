import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import { initializeSocket } from './chatHelpers/socketConnection';
import axios from 'axios'
function Dm({recipient, chats}) {

  const [messages, setMessages] = useState([])

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState(1)

  useEffect(() => {
    const cleanup = initializeSocket(user, setMessages, setSocket);
    return cleanup;
  }, []);

  useEffect(() => {
    if(chats) {
      setMessages(chats.messages)
    }
  }, [chats])

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
      <div className="flex flex-col items-center justify-center border-8 h-[100%] w-[100%]">
        {messages ? (
          messages.map((message, idx) => {
           return <p key={idx}>{message.context}</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <input
          className="border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
          className="border"
          onClick={() => {sendMessage(input, user); setInput("")}}
          >{">"}</button>
        </div>
      </div>
    </>
  );
}

export default Dm;