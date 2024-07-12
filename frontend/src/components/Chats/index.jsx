import { useEffect, useState } from 'react';
import './index.sass';
import Chat from '../Chat'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import PropTypes from 'prop-types';

function Chats({ setCurrentChat }) {
  const [chats, setChats] = useState([]);
  const [chatName, setChatName] = useState('');
  const handleChange = (event) => {
    setChatName(event.target.value);
  }
  const addChat = () => {
    if (chatName) {
      console.log(chatName);
      clearInput();
    }
  }
  const clearInput = () => {
    setChatName('');
  }

  useEffect(() => {
    //get chats 
    setChats([{
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgdfsdfsdfgdsfggdfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'ddfgdfgdfsggdfgdfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'df4234234gdfgdfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgdfgdfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfs534534534dfsdfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '1342342345245fsdfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: '131245fsddfgdfgfdgfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfsdfsdfg3423423434t5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'dfgdfgdfgd'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgdfgdfgfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'dfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'sdfsdfsdfS'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgsdfsdf'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfsdfsdfdfgdfgdfggt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '1342342345dfgdfghdfg245fsdfgt5345tr'
    }])
  }, []);
  return (

    <div className="chatsDiv position-relative">
      <div className="chats  d-flex flex-column align-items-center">
        {chats.length && chats.map(chat => {
          return <Chat name={chat.name} time={chat.time} messages={chat.messages} setCurrentChat={setCurrentChat} online={chat.online} roomId={chat.roomId} key={chat.roomId} />
        })}
      </div>
      <div className="addDiv d-flex justify-content-around w-100 p-2">
        <Input placeholder="Chat name..." className='ps-3 pe-3 p-2' value={chatName} onChange={handleChange} />
        <IconButton aria-label="sendMessage" onClick={addChat}>
          <AddIcon />
        </IconButton>

      </div>
    </div>
  )
}

Chats.propTypes = {
  setCurrentChat: PropTypes.func
}

export default Chats