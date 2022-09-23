// context api

import React,{createContext, useContext, useReducer} from "react"
// this is the context api which acts as the data layer from where the information is pulled
export const StateContext = createContext();
// here the props are passed
export const StateProvider=({
    reducer,
    initialState,
    children
})=>(
    // the value contains the data which is to be accessed from the data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* children refers to <App/> = this means all the children inside the <StateProvider> will be able to access the data layer */}
        {children}
    </StateContext.Provider>
);
// This is the function which helps us to pull all the data from the data layer(which is referred as the StateContex) 
export const useStateValue=()=>useContext(StateContext)