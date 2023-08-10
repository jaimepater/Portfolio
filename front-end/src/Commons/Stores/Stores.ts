import React from 'react';
import ProfileStore from './ProfileStore';
import MessagesStore from './MessagesStore';
import SolutionStore from './SolutionStore';

const storesContext = React.createContext({
  profileStore: new ProfileStore(),
  messagesStore: new MessagesStore(),
  solutionStore: new SolutionStore(),
});

export default storesContext;
