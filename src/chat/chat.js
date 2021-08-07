/* eslint-disable react/prop-types */

// 3rd party resources
import React, { useState, useEffect, useRef } from 'react';

// Styling resources
import './chat.scss';


//gets the data from the action object and reducers defined earlier
function Chat({ username, roomName, socket }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    socket.on('chat', (data) => {

      messages.push({
        userId: data.id,
        username: data.username,
        text: data.text,
      });

      // moves new messages into state
      setMessages([...messages]);
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[socket]);

  const sendData = () => {
    if (text !== '') {
      socket.emit('chat', {text, username});
      setText('');
    }
  };
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, 'mess');

  return (
    <div>
      <div>
        <h1>DashMessenger</h1>
      </div>
      <div className='chatUpper'>
      
        <div className='chat'>
          <div className='user-name'>
            <h2>
              {username} <span style={{ fontSize: '0.7rem' }}>in room { roomName }</span>
            </h2>
          </div>
          <div className='chat-message'>
            {messages.map((i) => {
              if (i.username === username) {
                return (
                  <div className='message'>
                    <p>{i.text}</p>
                    <span>{i.username}</span>
                  </div>
                );
              } else {
                return (
                  <div className='message mess-right'>
                    <p>{i.text} </p>
                    <span>{i.username}</span>
                  </div>
                );
              }
            })}
            <div ref={messagesEndRef} />
          </div>
          <div className='send'>
            <input
              placeholder='Message'
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendData();
                }
              }}
            ></input>
            <button onClick={sendData}>Send</button>
          </div>
        </div>
              
      </div>
    </div>
  );
}

export default Chat;