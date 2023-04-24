import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Link from 'next/link'
import Dm from './subComponents/chat/dm';
function Chat() {

  const [selected, setSelected] = useState(0);

  return (
    <>
      {selected === 0 ? (<p></p>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Chat;