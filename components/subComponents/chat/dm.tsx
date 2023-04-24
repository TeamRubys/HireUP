import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import { initializeSocket } from './chatHelpers/socketConnection';
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

  const sendMessage = (message, user) => {
    console.log('hit')

    socket.emit('sendMessage', {roomName: 1, message: {sender_id: user, receiver_id: recipient, context: message}});
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

        <button
          onClick={() => {sendMessage('hi', 0)}}
        >Send test message</button>
      </div>
    </>

  );
}

export default Dm;