import React, {useState, useEffect} from 'react'
import Dm from './subComponents/chat/dm';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
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
        <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
          <div className="relative flex flex-col items-center justify-center h-[80%] w-[40%]">
            <div className="h-[10%] w-[90%] border-b-2 text-dollar font-bold text-xl flex items-center
            ">HigherUp</div>
            <div className="flex flex-col mt-[5%] h-[100%] w-[100%]">
              <div className="flex items-center justify-evenly h-[90%]">
                <div className="flex flex-col rounded-lg items-center justify-evenly h-[100%] w-[18%] bg-gray-400">
                {Object.values(messages).length === 0 ? (
                  <p>No Chats Found</p>
                ) : (
                Object.values(messages).map((message, idx) => {
                  return (
                    <button
                    key={idx}
                    onClick={() => {setRecipient(message.recipient)}}
                    className="flex items-center justify-center rounded-full border h-[5vw] w-[5vw] bg-light">
                    {message.recipient}
                    </button>
                  );
                })
                )}
                </div>
                <div className="flex flex-col rounded-lg border h-[100%] w-[78%] bg-gray-400">
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