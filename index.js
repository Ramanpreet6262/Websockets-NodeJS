const express = require('express');
const socketio = require('socket.io');

let app = express();

// Static Files
app.use(express.static('public'));

const PORT = process.env.PORT || 8030;

let server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});

//Socket setup
let io = socketio(server);

io.on('connection', socket => {
  console.log('made socket connection');

  // Now, we can listen for that message named 'chat' that is being sent by the client side
  socket.on('chat', data => {
    // When we recieve data from client to the server, we will send it out to all different clients
    // connected to server on a web socket so that everyone viewing the chat room can see that message
    io.sockets.emit('chat', data);
  }); // here sockets in io.sockets refer to all of the users connected to this server..
});
