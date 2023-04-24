import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
function Dm({user, recipient}) {

  const [messages, setMessages] = useState(['test message'])

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io())
  }, [])

  useEffect(() => {
    if(socket !== null) {
      socket.on('connect', () => {
        console.log('Connected to server')
        socket.emit('joinRoom', user)
      })

      socket.on('newMessage', (message) => {
        setMessages((messages) => [...messages, message]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [socket]);

  const sendMessage = (message, user) => {
    console.log('hit')

    socket.emit('sendMessage', {roomName: recipient, message: message});
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center border-8 h-[100%] w-[100%]">
        {messages.map((message, idx) => {
          return <p key={idx}>{message}</p>
        })}
        <button
          onClick={() => {sendMessage('hi', 0)}}
        >Send test message</button>
      </div>
    </>

  );
}

export default Dm;