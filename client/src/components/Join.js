import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import TextField from '@material-ui/core/TextField';

import './join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
     return (
        <div className="main">
            <h1 className="wechat">WeChat </h1>
            <div className="mainform">
                <div className="avater"> <Avatar className="mainavater" src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg">  </Avatar> </div>
                <div className="inputs">
                    <input className="inputMain" placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
                    <input className="inputMain" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
                    {(name && room) ? <Link to={`/chat?name=${name}&room=${room}`}>
                        <button type="submit" className="btn"> Start Chat </button>
                    </Link> :  <button type="submit" disabled className="btn"> Start Chat </button>}
                </div>
            </div>
        </div>
    )
}
export default Join;