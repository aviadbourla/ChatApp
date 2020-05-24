import React, { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import Avatar from '@material-ui/core/Avatar';
import './Message.css';

const Message = (props) => {
    let isSentByCurrentUser = false;
    const trimedname = props.name.trim().toLowerCase();
    if (props.message.user === trimedname) {
        isSentByCurrentUser = true;
    }
    console.log(props)
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                {props.message.image && <img className="image" src={`data:image/png;base64 ,${props.message.image}`} />}
                {props.message.text &&
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{props.message.text}</p>
                    </div>}
            </div>
        )
            : (
                <div className="messageContainer justifyStart">
                    {props.message.image && <img className="image" src={`data:image/png;base64 ,${props.message.image}`} />}
                    {props.message.text &&
                        <div className="messageBox backgroundLight">
                            <p className="messageText colorDark">{props.message.text}</p>
                        </div>}
                    <div className="useravaterChat" ><Avatar src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg">  </Avatar>  <p className="usernameChat">{props.message.user}</p></div>
                </div>
            )
    );
}


export default Message;

