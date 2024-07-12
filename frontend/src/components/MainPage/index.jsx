import './index.sass';
import Chats from '../Chats'
import CurrentChat from '../CurrentChat';
import { useState } from 'react';

function MainPage() {
  const [currentChat, setCurrentChat] = useState({});
  return (
    <div className="wrapperMain d-flex">
      <Chats setCurrentChat={(chat) => { setCurrentChat(chat) }} />
      <CurrentChat currentChat={currentChat} />
    </div>
  )
}

export default MainPage