import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import Dm from './subComponents/chat/dm';
import axios from 'axios';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
function Chat() {

  const [selected, setSelected] = useState(0);

  const [messages, setMessages] = useState([])

  const [user, setUser] = useState(1)

  useEffect(() => {
    const fetchMessages = async () => {
      const list = await getMessages(1);
      setMessages(list);
    }
    fetchMessages();
  }, []);


  return (
    <>
        <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
          <div className="flex flex-col items-center h-[80%] w-[40%] border-4">
            <div className="h-[10%] w-[90%] border-b-2">Header</div>
            <div className="flex flex-col h-[100%] w-[100%]">
              <div className="flex items-center border h-[80%]">
                <div className="flex flex-col items-center justify-evenly border h-[80%] w-[20%]">
                  {messages.map((message) => {
                    return <button className="flex items-center justify-center rounded-full border h-[5vw] w-[5vw]">{message.recipient}</button>
                  })}
                </div>
                <div className="flex flex-col border h-[80%] w-[80%]">
                  No Chat Selected
                </div>
              </div>
              <div className="flex border h-[20%]"></div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Chat;