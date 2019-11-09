import React from 'react';
import ProfileStore from './ProfileStore';

const storesContext = React.createContext({
  profileStore: new ProfileStore(),
});


export default  storesContext;