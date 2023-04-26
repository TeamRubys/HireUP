import React, {useState, useEffect} from 'react'
import Chat from './chat'
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
import { initializeSocket } from './subComponents/chat/chatHelpers/socketConnection'
import axios from 'axios'
import logo from '../components/subComponents/landingPage/logo.png'
import Image from 'next/image'

function NewChat({recipient}) {

  const [messages, setMessages] = useState([])

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState(1)

  const [chatStarted, setChatStarted] = useState(false)

  useEffect(() => {
    const cleanup = initializeSocket(user, setMessages, setSocket);
    return cleanup;
  }, []);

  const [input, setInput] = useState("");

  const sendMessage = (message, recipient) => {
    socket.emit('sendMessage', {roomName: recipient, message: {sender_id: user, receiver_id: recipient, context: message}});
    axios.post('/api/messages', {sender_id: user, receiver_id: recipient, context: message})
    .then((res) => {
      console.log("message posted to DB")
      setChatStarted(true)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return (
    <>
    {chatStarted ? (
      <Chat />
    ) : (
      <div className="absolute flex items-center justify-center h-[100%] w-[100%] z-50">
          <div className="relative rounded-lg bg-slate-300 bg-opacity-50 flex flex-col items-center h-[20%] w-[50%]">
            <div className="w-[70%] h-[20%] flex justify-center font-extrabold m-4 mb-[1vw] mt-[0] text-[2vw] items-center border-b border-black">
              <p>Message {recipient}</p>
            </div>
            <div className="flex justify-center items-center w-[100%] h-[20%] rounded mt-[5%]">
              <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Message..."
              className="h-[100%] w-[70%] border border-dollar rounded mr-1">
              </input>
              <button
              onClick={() => {sendMessage(input, recipient)}}
              className="flex max-h-[100%] text-[2vw] items-center justify-center border p-2 rounded border-dollar bg-white hover:bg-gray-400">
              Start Chat
            </button>
            </div>
            <Image
            className="absolute bottom-[10%]"
            src={logo}
            alt='logo'
            width='120'
            height='120'
            />
          </div>
        </div>
    )}
    </>
  );
}

export default NewChat;