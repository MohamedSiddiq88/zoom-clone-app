import React, { useState } from 'react';
import '../App.css'
function Chat({ socket, roomId, peerId, setIsMessageArrive }) {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatMessageChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleSendChatMessage = () => {
    if (chatMessage.trim() !== '') {
      socket.emit('chat-message', roomId, peerId, chatMessage);
      setChatMessage('');
    }
  };

  React.useEffect(() => {
    socket.on('chat-message', (userId, message) => {
      const updatedChatMessages = [...chatMessages, { userId, message }];
      setChatMessages(updatedChatMessages);
      if (userId !== peerId) {
        setIsMessageArrive(true);
      }
    });

    return () => {
      socket.off('chat-message');
    };
  }, [socket, chatMessages]);

  return (
    <div className="container mt-5 chat">
      <h3 className="text-center">Chat</h3>
<div className='message-area'>
<div className="chat-messages">
      {chatMessages.map((message, index) => (
  <div
    key={index}
    className={`chat-message ${
      message.userId === peerId ? 'received' : 'sent'
    }`}
  >
    <strong>{message.userId}:</strong> {message.message}
  </div>
))}

      </div>
</div>
      <div className="chat-input " >
        <textarea
          
          className="form-input"
          value={chatMessage}
          onChange={handleChatMessageChange}
          placeholder="Enter your message"
        ></textarea>
        <button className="btn btn-primary send-btn" onClick={handleSendChatMessage}>
          Send
        </button>
      </div>
      
    </div>
  );
}

export default Chat;
