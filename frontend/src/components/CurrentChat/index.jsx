import './index.sass'
import Input from '@mui/material/Input';
import EmojiPicker from 'emoji-picker-react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useState } from 'react';
import PropTypes from 'prop-types';

function CurrentChat({ currentChat }) {
  const [toggleEmojiBar, setToggleEmojiBar] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const logOut = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  }
  const addEmoji = ({ emoji }) => {
    setCurrentMessage(currentMessage.concat(emoji));
  }
  const sendMessage = () => {
    console.log(currentMessage);
    clearInput();
  }
  const clearInput = () => {
    setCurrentMessage('');
  }

  return (
    <>
      {Object.keys(currentChat).length ? <div className="currentWrapper d-flex flex-column">
        <div className="messages" >
          <IconButton onClick={logOut} >
            <LogoutIcon />
          </IconButton>
        </div>
        <div className="inputDiv bg-light d-flex">
          <Input placeholder="Type..." className='mainInput ps-3 pe-3 p-2' value={currentMessage} onChange={handleChange} />
          {currentMessage.length ? <IconButton aria-label="sendMessage" onClick={sendMessage}>
            <SendIcon />
          </IconButton> : <IconButton aria-label="sendMessage" disabled>
            <SendIcon />
          </IconButton>}
          <IconButton aria-label="emoji" onClick={() => setToggleEmojiBar(!toggleEmojiBar)}>
            <SentimentSatisfiedAltIcon />
          </IconButton>
        </div>
        <EmojiPicker className='position-absolute bottom-0 end-0 emojiBar'
          open={toggleEmojiBar}
          onEmojiClick={addEmoji}
          defaultSkinTone='1f3fc'
          skinTonesDisabled
        />
      </div> :
        <div className='emptyPage'>
          <div className='d-flex flex-column justify-content-between align-items-center'>
            <span className='mt-5 fw-bold fs-4'>Select the chat in which you would like to write</span>
          </div>
        </div>}
    </>

  )
}
CurrentChat.propTypes = {
  currentChat: PropTypes.object
}
export default CurrentChat