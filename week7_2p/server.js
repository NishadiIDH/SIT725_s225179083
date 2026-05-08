const express = require('express');
const app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});