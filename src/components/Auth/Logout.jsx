import React, { useContext } from 'react'
import { LoginlogoutContext } from '../../context/LoginlogoutContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigation=useNavigate()
    const {setToggle}=useContext(LoginlogoutContext)
    const handleLogout = () => {
        setToggle(false);
        localStorage.setItem("login", false);
        console.log(localStorage.getItem("login"));
        navigation("/");
    };
    
  return (
    <button  onClick={handleLogout}>Logout</button>
  )
}

export default Logout