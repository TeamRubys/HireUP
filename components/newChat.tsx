import React, {useState, useEffect} from 'react'
import Dm from './subComponents/chat/dm';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
import { initializeSocket } from './subComponents/chat/chatHelpers/socketConnection'
import axios from 'axios'

function NewChat({recipient}) {

  const [messages, setMessages] = useState([])

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState(1)

  useEffect(() => {
    const cleanup = initializeSocket(user, setMessages, setSocket);
    return cleanup;
  }, []);

  const [input, setInput] = useState("");

  const sendMessage = (message, user) => {
    console.log(user)
    socket.emit('sendMessage', {roomName: recipient, message: {sender_id: user, receiver_id: recipient, context: message}});
    axios.post('/api/messages', {sender_id: user, receiver_id: recipient, context: message})
    .then((res) => {
      console.log("message posted to DB")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
        <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
          <div className="relative rounded-lg bg-slate-300 flex flex-col items-center justify-center h-[80%] w-[50%]">
          </div>
        </div>
    </>
  );
}

export default NewChat;