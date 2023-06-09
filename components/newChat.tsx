import React, {useState, useEffect} from 'react'
import Chat from './chat'
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
import { initializeSocket } from './subComponents/chat/chatHelpers/socketConnection'
import axios from 'axios'
import logo from '../components/subComponents/landingPage/logo.png'
import Image from 'next/image'

function NewChat({sendTo, setState, setCurrentPage}) {

  const [recipient, setRecipient] = useState(sendTo)

  const [messages, setMessages] = useState([])

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState(1)

  const [chatStarted, setChatStarted] = useState(false)

  const [users, setUsers] = useState([])

  const [searchInput, setSearchInput] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setRecipient(sendTo)
    console.log(recipient)
  }, [])

  useEffect(() => {
    const cleanup = initializeSocket(user, setMessages, setSocket);
    return cleanup;
  }, []);

  useEffect(() => {
    console.log('hit')
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    console.log(filteredUsers)
  }, [searchInput, users]);

  useEffect(() => {
    if(recipient === 0) {
      axios.get('/api/users')
      .then((res) => {
        setUsers(res.data.rows)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [])
  const [input, setInput] = useState("");

  const sendMessage = (message) => {
    socket.emit('sendMessage', {roomName: recipient.id, message: {sender_id: user, receiver_id: recipient.id, context: message}});
    axios.post('/api/messages', {sender_id: user, receiver_id: recipient.id, context: message})
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
    {recipient ? (
      chatStarted ? (
        <Chat sendTo={recipient.id} setState={setState} setCurrentPage={setCurrentPage}/>
      ) : (
        <div className="absolute flex items-center justify-center h-[100%] w-[100%] z-50">
            <div className="relative rounded-lg bg-slate-300 bg-opacity-50 flex flex-col items-center h-[20%] w-[50%]">
              <div className="w-[70%] h-[20%] flex justify-center font-extrabold m-4 mb-[1vw] mt-[0] text-[2vw] items-center border-b border-black">
                <p>Message {recipient.name}</p>
              </div>
              <div className="flex justify-center items-center w-[100%] h-[20%] rounded mt-[5%]">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Message..."
                className="h-[100%] w-[70%] border border-dollar rounded mr-1">
                </input>
                <button
                onClick={() => {sendMessage(input)}}
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
            <button
        onClick={() => {if(setState) {setState(false)}}}
        className="absolute top-[40%] right-[26%] z-50">x</button>
          </div>
      )
    ) : (
      <div className="absolute flex items-center justify-center h-[100%] w-[100%] z-50">
      <div className="relative rounded-lg bg-slate-300 bg-opacity-50 flex flex-col items-center h-[20%] w-[50%] justify-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search users by name..."
          className="h-[20%] w-[50%] border border-dollar rounded mr-1"
        />
        <div className="flex flex-col bg-white h-[50%] w-[50%] overflow-auto">
          {filteredUsers.map((user, idx) => {
            return <button
             key={idx}
             className="border-b"
             onClick={() => {setRecipient(user)}}
            >{user.name}</button>
          })}
        </div>
        </div>
        <button
        onClick={() => {if(setState) {setState(false)}}}
        className="absolute top-[40%] right-[26%] z-50">x</button>
        </div>
    )}
    </>
  );
}

export default NewChat;