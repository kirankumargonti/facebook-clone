import React, {createContext, useReducer,useContext} from 'react';

const FacebookContext = createContext();

const FacebookProvider = ({reducer, initialState, children}) => (
  <FacebookContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FacebookContext.Provider>
);

const useFacebookValue = () => useContext(FacebookContext)

export {FacebookContext, FacebookProvider, useFacebookValue};
