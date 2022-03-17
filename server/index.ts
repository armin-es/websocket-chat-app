const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: 'http://localhost:3000', credentials: true}});
const {data} = require('./data');

const sessionData = {...data};

app.get('/', (req, res) => {
  res.send('hello from server');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id);
  
  socket.on('join channel', (channel) => {
    console.log('joined channel: ' + channel);
    socket.join(channel);
    socket.emit('joined channel', channel);
    socket.emit('channel history', sessionData[channel]);
  });

  socket.on('send message', ({channel, text, userName}) => {
    const message = {userName, text, time: new Date()}
    sessionData[channel].push(message);
    socket.emit('channel history', sessionData[channel]);
    socket.to(channel).emit('channel history', sessionData[channel]);
  });

  socket.on('update message', ({channel, userName, messageIndex, updatedText}) => {
    const updatedMessage = {userName, text: updatedText, time: new Date()}

    sessionData[channel][messageIndex] = updatedMessage;
    socket.emit('channel history', sessionData[channel]);
  });
  socket.on('delete message', ({channel, messageIndex}) => {
    sessionData[channel].splice(messageIndex, 1);
    socket.emit('channel history', sessionData[channel]);
    socket.to(channel).emit('channel history', sessionData[channel]);
  });

  socket.emit('channels', Object.keys(sessionData));

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});