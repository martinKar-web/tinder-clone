import React from 'react';
import Chat from './Chat';
//import './Chats.css';

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you?"
        timestamp="35 min ago"
        profilePic='url'
      />
      <Chat
        name="Ellen"
        message="Yo whats up!"
        timestamp="55 min ago"
        profilePic='url'
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic='url'
      />
      <Chat
        name="Natasha"
        message="Ooops! there he is..."
        timestamp="1 week ago"
        profilePic='url'
      />
    </div>
  );
};

export default Chats;
