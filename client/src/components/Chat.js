import React, { useState, useEffect } from 'react';
import quertString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
import InfoBar from './InfoBar';
import InputBar from './InputBar';
import Messages from './Messages';

 
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({text: '',image: null});
    const [users, setusers] = useState([]);

    const ENDPOINT = 'localhost:4000'
    useEffect(() => {
        const { name, room } = quertString.parse(location.search)
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room })
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    useEffect(() => {
        socket.on('roomData', ({users}) => {
            setusers(users)
        })
    }, [users])

    const sendMessage = (event) => {
        if (message) {
            socket.emit('sendMessage', message, () => setMessage({text:'',image: null}));
        }
    }
    const removeuser = (event) => {
             socket.emit('disconnect', users,)
    }
    console.log(message)
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} name={name} users={users} />
                <Messages messages={messages} name={name}/>
                <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage}  />
              </div>
         </div>

    )
}

export default Chat;