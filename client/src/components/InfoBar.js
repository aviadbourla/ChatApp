import React from 'react';
import './InfoBar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';

const InfoBar = (props) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                {props.users.map((user, i) => <div className="useravater" key={i}><Avatar src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg">  </Avatar>  <p className="username">{user.name}</p></div>)}
            </div>
            <div className="rightInnerContainer">
                <div className="icon">   <a href="/" className="link">  <ExitToAppIcon color="iconscolor"/> </a> </div>
            </div>
        </div>)
}
export default InfoBar;

