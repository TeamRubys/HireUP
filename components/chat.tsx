import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import Dm from './subComponents/chat/dm';
import axios from 'axios';
const {getMessages} = require('./subComponents/chat/chatHelpers/helpers')
function Chat() {

  const [selected, setSelected] = useState(0);

  const [message, setMessage] = useState()

  const [user, setUser] = useState(1)

  useEffect(() => {
    getMessages(1)
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