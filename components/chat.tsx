import React, {useState, useEffect} from 'react'
import Dm from './subComponents/chat/dm';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
function Chat() {

  const [selected, setSelected] = useState(0);

  const [messages, setMessages] = useState([])

  const [recipient, setRecipient] = useState(2)

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
        <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
          <div className="flex flex-col items-center h-[80%] w-[40%] border-4">
            <div className="h-[10%] w-[90%] border-b-2">Header</div>
            <div className="flex flex-col h-[100%] w-[100%]">
              <div className="flex items-center border h-[80%]">
                <div className="flex flex-col items-center justify-evenly border h-[80%] w-[20%]">
                  {Object.values(messages).map((message, idx) => {
                    return <button
                     key={idx}
                     onClick={() => {setRecipient(message.recipient)}}
                     className="flex items-center justify-center rounded-full border h-[5vw] w-[5vw]">{message.recipient}</button>
                  })}
                </div>
                <div className="flex flex-col border h-[80%] w-[80%]">
                  <Dm recipient={recipient} chats={messages[recipient]} />
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