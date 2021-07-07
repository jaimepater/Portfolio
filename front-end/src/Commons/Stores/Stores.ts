import React from 'react';
import ProfileStore from './ProfileStore';
import MessagesStore from './MessagesStore';

const storesContext = React.createContext({
  profileStore: new ProfileStore(),
  messagesStore: new MessagesStore(),
});

export default storesContext;
