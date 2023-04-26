import io from 'socket.io-client';

export const initializeSocket = (user, setMessages, setSocket) => {
  const socket = io();
  setSocket(socket);

  socket.on('connect', () => {
    console.log('Connected to server')
    socket.emit('joinRoom', user)
  });

  socket.on('newMessage', (message) => {
    console.log('sss')
    console.log(message)
    setMessages((messages) => [...messages, message]);
  });

  return () => {
    socket.disconnect();
  };
};