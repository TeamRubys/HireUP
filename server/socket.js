const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (roomName) => {
      socket.join(roomName)
    });

    socket.on('sendMessage', ({roomName, message}) => {
      io.to(roomName).emit('newMessage', message)
    })

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}