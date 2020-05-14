const express = require('express');
const socketio = require('socket.io')
const http = require('http');

const { addUsers, removeUser, getUser, getUsersinRoom } = require('./users')

const PORT = process.env.PORT || 4000

const router = require('./router')

const server = http.createServer(app);
const io = socketio(server);

var app = express(router)



server.listen(PORT, () => console.log(`start on port ${PORT}`));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUsers({ id: socket.id, name, room });
        if (error) return callback(error);
        console.log(user)
 
        socket.emit('message', { user: 'admin',text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name},has joined`});
        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersinRoom(user.room) })
    });

    // var uploader = new siofu();
    // uploader.dir = "/";
    // uploader.listen(socket);

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message.text , image: message.image });
         io.to(user.room).emit('roomData', { room: user.room, users: getUsersinRoom(user.room) });
    })

  
    // socket.on('sendimage', (image, callback) => {
    //     const user = getUser(socket.id);
    //     fs.readFile(__dirname + '/images/image.jpg', function(err, buf){
    //         socket.emit('image', { image: true, buffer: buf });
    //         console.log('image file is initialized');
    //  })

     socket.on('disconnect', () => {
        console.log(`user had left!!!`)
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name},has left` });
        }

    })
});

// http.listen(3000, () => {
//   console.log('listening on *:4000');
// });

 