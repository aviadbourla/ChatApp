import React from 'react';
import './InfoBar.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';

const InfoBar = (props) => {
    // const AvatarArr = ["https://david-president.herokuapp.com/static/media/david.e5a87f4c.png","https://david-president.herokuapp.com/static/media/liran.8027b78c.png","https://david-president.herokuapp.com/static/media/adir.e7521d10.png"];
    // const random = Math.floor(Math.random() * 3);
    // const url = AvatarArr[random];
    return(
  <div className="infoBar">
    <div className="leftInnerContainer">
        {/* <Avatar aria-label="recipe"  >
            {props.room}
        </Avatar> */}
    {props.users.map((user, i) => <div className="useravater" key={i}><Avatar src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg">  </Avatar>  <p className="username">{user.name}</p></div>)}
     </div>
    <div className="rightInnerContainer">
        {/* <div className="icon"> <VideocamIcon color="iconscolor" /> </div>
        <div className="icon"> <CallIcon color="iconscolor" /> </div> */}
        <div className="icon"> <MoreVertIcon color="iconscolor" /> </div>
        {/* <a href="/"> <img src={"https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png"} /> </a> */}
    </div>
</div>)}
export default InfoBar;

