import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import SimpleDialog from './SimpleDialog';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './InputBar.css';

const InputBar = ({ message, setMessage, sendMessage }) => {
 
  function handleFileSelect(event) {
    var f = event.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        setMessage({image: base64String, text:''});
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }

  return (
    <form className="form">
      <div className="sendicon">
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="files"
          multiple
          type="file"
          onChange={handleFileSelect}
        />
        <label htmlFor="files">
          <Button variant="raised" component="span">
            <CameraAltIcon />
          </Button>
        </label> </div>
      <input className="input"
        type="text"
         onChange={(event) => setMessage({text:event.target.value})}
        />
      <div className="sendicon"> <SendIcon onClick={() => sendMessage(message)} />  </div>
    </form>
  )
}
export default InputBar;

// onKeyPress={event => event.key === 'Enter' ? sendMessage(event.target.value) : null} 