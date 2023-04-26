import React, {useState, useEffect} from 'react'
import Dm from './subComponents/chat/dm';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
import logo from '../components/subComponents/landingPage/logo.png'
import Image from 'next/image'

function Chat() {

  const [selected, setSelected] = useState(0);

  const [messages, setMessages] = useState([])

  const [recipient, setRecipient] = useState(0)

  useEffect(() => {
    const fetchMessages = async () => {
      const list = await getMessages(1);
      setMessages(list);
    }
    fetchMessages();
  }, []);
  console.log(messages[recipient])

  return (
    <>
        <div className="absolute flex items-center justify-center h-[100%] w-[100%] z-50">
          <div className="relative rounded-lg bg-slate-300 bg-opacity-50 flex flex-col items-center justify-center h-[80%] w-[50%]">
            <div className="h-[10%] w-[90%] border-b-2 border-dollar text-dollar font-bold text-xl flex items-center
            ">
              <Image
            className=""
            src={logo}
            alt='logo'
            width='120'
            height='120'
            />
            </div>
            <div className="flex flex-col mt-[5%] h-[85%] w-[100%]">
              <div className="flex items-center justify-evenly h-[90%]">
                <div className="flex flex-col rounded-lg items-center justify-between h-[98%] w-[18%] bg-gray-400 overflow-y-auto scrollbar-hide">
                {Object.values(messages).length === 0 ? (
                  <p>No Chats Found</p>
                ) : (
                Object.values(messages).map((message, idx) => {
                  return (
                    <button
                    key={idx}
                    onClick={() => {setRecipient(message.recipient)}}
                    className="flex items-center text-xl justify-center rounded-full border min-h-[8vw] min-w-[8vw] bg-light border-dollar">
                    {message.recipient}
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
                    <Dm recipient={recipient} chats={messages[recipient]} />
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Chat;