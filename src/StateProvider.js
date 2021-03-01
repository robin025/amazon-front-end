//setting up data layer
// we need this to track the basket
import React, { useContext } from "react";
import { createContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// building a provider so that we can wrap our entire app in this provier to give access to this data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* here childeren is refering to the APp.js */}
  </StateContext.Provider>
);

// this is how we use inside of a component
export const useStateValue = () => useContext(StateContext);
