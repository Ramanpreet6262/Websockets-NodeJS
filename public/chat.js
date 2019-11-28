// Make io connection
let socket = io.connect('http://localhost:8030');

// Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
  message.value = '';
}); //.emit() method is going to emit a message down the websocket to the server
// .emit() takes two parameters, first one is name of message what we are gonna call it, lets say 'chat' message..
// and second parameter is what the actual message is that we are sending to the server

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', data => {
  feedback.innerHTML = '';
  output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
});

socket.on('typing', data => {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});
