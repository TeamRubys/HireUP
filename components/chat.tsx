import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import Dm from './subComponents/chat/dm';
import axios from 'axios';
function Chat() {

  const [selected, setSelected] = useState(0);

  const [message, setMessage] = useState()

  const [user, setUser] = useState(1)

  const formatMessages = (messages, userId) => {
    const formatted = {};

    messages.forEach((message) => {
      const recipientId = message.sender_id === userId ? message.receiver_id : message.sender_id;
      if (!formatted[recipientId]) {
        formatted[recipientId] = { recipient: recipientId, messages: [] };
      }
      formatted[recipientId].messages.push({
        id: message.id,
        sender_id: message.sender_id,
        receiver_id: message.receiver_id,
        context: message.context,
        timestamp: message.timestamp,
      });
    });

    return Object.values(formatted);
  }

  useEffect(() => {
    console.log('useEfffect')
    axios.get(`/api/messages?id=${1}`)
    .then((res) => {
      console.log(formatMessages(res.data, user))
    })

  }, [])

  return (
    <>
      {selected === 0 ? (
        <p></p>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Chat;