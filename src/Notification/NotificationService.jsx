/* import { useState, createContext, useContext } from "react";


const NotificationContext = createContext()
const Notification = ( {msg} ) => {
    const notiStyle = {
        position:'absolute',
        top:100,
        right: 30,
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px 10px 20px',
        fontSize: 20,
        borderRadius: 10
    }
    return(
        <div style={notiStyle}>
            {msg}
        </div>
    )
    }

export const NotificationProvider = ({children}) => {
    const { message, setMesagge} = useState('')

    const setNotification = ({msg}) => {
        setMesagge(msg)
    }

    return (
        <NotificationContext.Provider value= {{ setNotification }}>
            <Notification msg = {message}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
   return useContext(NotificationContext)
} */

import React, { useState, createContext, useContext } from "react";

const NotificationContext = createContext();

const Notification = ({ msg }) => {
  const notiStyle = {
    display: 'block',
    position: 'absolute',
    top: 100,
    right: 30,
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    fontSize: 20,
    borderRadius: 10,
  };
  if (!msg) return null

  return <div style={notiStyle}>{msg}</div>;
};

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(''); // Cambié setMesagge a setMessage

  const setNotification = ({ msg }) => {
    setMessage(msg); // Cambié setMesagge a setMessage
  };

  return (
    <NotificationContext.Provider value={{ message,setNotification }}>
      <Notification msg={message} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
