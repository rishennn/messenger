import './index.sass';
import PropTypes from 'prop-types';
import ChatIcon from '@mui/icons-material/Chat';
function Chat({ name, online, messages, time, setCurrentChat, roomId }) {
  const lastMessage = messages.at(-1).message;
  return (
    <div className="chatDiv border-bottom p-2  align-items-center" onClick={() => setCurrentChat({ name, online, messages, time, roomId })}>
      <div className="icon">
        <ChatIcon fontSize='large' className='chatIcon' />
      </div>
      <div className="chatInfo ms-3 pe-3">
        <div className="firstRow d-flex justify-content-between align-items-center">
          <span><b>{name}</b></span>
          <span className={online > 0 ? 'text-success' : 'text-secondary'}>online: {online}</span>
        </div>
        <div className="secondRow">
          <span>{lastMessage.length >= 20 ? lastMessage.slice(0, 20) + '...' : lastMessage}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}
Chat.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  roomId: PropTypes.string,
  online: PropTypes.number,
  messages: PropTypes.array,
  setCurrentChat: PropTypes.func
}
export default Chat