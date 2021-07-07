import React from 'react';
import storesContext from '../Stores/Stores';

const useStores = () => React.useContext(storesContext);

export default useStores;
