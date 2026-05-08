const socket = io();

const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {

    const message = messageInput.value;

    socket.emit('chat message', message);

    messageInput.value = '';
});

socket.on('chat message', (msg) => {
    const p = document.createElement('p');

    p.textContent = msg;

    messages.appendChild(p);
});
