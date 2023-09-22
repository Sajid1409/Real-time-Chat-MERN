import React from 'react'
import logo from '../chat.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
  const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={"welcome-container" + (lightTheme ? "":" dark")}>
      <img src={logo} alt='logo'
       className={"welcome-logo" + (lightTheme ? "":" dark-welcome")}/>
       <p>Stay Connected text directly to people and Create group chats as well</p>
    </div>
  )
}

export default Welcome