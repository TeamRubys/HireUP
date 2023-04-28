import React, {useState, useEffect, useContext} from 'react'
import Dm from './subComponents/chat/dm';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
import logo from '../components/subComponents/landingPage/logo.png'
import Image from 'next/image'
import NewChat from './newChat';
import axios from 'axios'
import { UserIdContext } from '../components/UserIdContext';

function Chat({sendTo, setState, setCurrentPage}) {

  const userId = useContext(UserIdContext);

  const [newChat, setNewChat] = useState(false)

  const [messages, setMessages] = useState([])

  const [recipient, setRecipient] = useState(sendTo)

  const [recipients, setRecipients] = useState([])

  const [trigger, setTrigger] = useState(false);

  const [name, setName] = useState("")

  console.log('USEERRID', userId)

  useEffect(() => {
    const fetchMessages = async () => {
      const list = await getMessages(userId);
      const start = async () => {
        await setMessages(list);
        setTrigger(true);
      }
      start();
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    Object.values(messages).forEach((message) => {
      axios.get(`api/users/${message.recipient}`)
      .then((res) => {
      setRecipients((prevRecipients) => [...prevRecipients, res.data])
      console.log(recipients)
    })
    .catch((err) => {
      console.log(err)
    })
    })
  }, [trigger])

  useEffect(() => {
    recipients.forEach((message) => {
      if(message.id === recipient) {
        setName(message.name)
      }
    })
  })

  return (
    <>
      {newChat ? (
        <NewChat sendTo={0} setState={setState}/>
      ) : (
        <div className="absolute flex items-center justify-center h-[100%] w-[100%] z-50">
        <div className="relative rounded-lg bg-slate-300 flex flex-col items-center justify-center h-[80%] w-[50%] border-2 border-dollar">
          <div className="h-[10%] w-[90%] border-b-2 border-dollar text-dollar font-bold text-xl flex items-center
          ">
            <Image
          className=""
          src={logo}
          alt='logo'
          width='120'
          height='120'
          />
         <button className="bg-green-200 hover:bg-green-400 text-white rounded-md py-2 px-4 mr-2 shadow-lg" onClick={()=> {setCurrentPage(7)}}>Video</button>
          <p className="border rounded bg-dollar p-[1%] ml-auto text-black text-[1vw]">Chatting With: {name}</p>
          </div>
          <div className="flex flex-col mt-[5%] h-[85%] w-[100%]">
            <div className="flex items-center justify-evenly h-[90%]">
              <div className="flex flex-col rounded-lg items-center justify-between h-[98%] w-[18%] bg-gray-400 overflow-y-auto scrollbar-hide">
              {Object.values(messages).length === 0 ? (
                <p>No Chats Found</p>
              ) : (
              recipients.map((message, idx) => {
                return (
                  <button
                  key={idx}
                  onClick={() => {setRecipient(message.id); setName(message.name)}}
                  className="flex items-center text-xl justify-center rounded-full border min-h-[8vw] min-w-[8vw] bg-light border-dollar">
                  {(message.name[0] + message.name[1]).toUpperCase()}
                  </button>
                );
              })
              )}
              </div>
              <div className="flex flex-col rounded-lg border h-[98%] w-[78%] bg-gray-400">
                {recipient === 0 ? (
                  <div className="h-[100%] w-[100%] flex items-center justify-center">
                    <p>Please Select a Chat</p>
                  </div>
                ):(
                  <>
                  <Dm recipient={recipient} chats={messages[recipient]} setNewChat={setNewChat} userId={userId}/>
                  </>
                )}

              </div>
            </div>
            <button
          onClick={() => {setNewChat(true)}}
          className="flex rounded-lg items-center justify-center text-xl w-[10%] bg-gray-40 ml-[5%] border bg-slate-400 z-50">+</button>
         <div className="w-[75%]"></div>
          </div>
        </div>
        <button
        onClick={() => {if(setState) {setState(false)}}}
        className="absolute top-[10%] right-[26%] z-50">x</button>
      </div>
      )}
    </>
  );
}

export default Chat;