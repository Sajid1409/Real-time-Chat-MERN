import React from 'react'
import { useSelector } from 'react-redux'

const MessageOthers = () => {
  var props1={name:"John Doe", message: "This is a sample message"}
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div className={"other-message-container" + (lightTheme ? "":" dark")}>
      <div className={"convesration-container" + (lightTheme ? "":" dark")}>
        <p className={"con-icon" + (lightTheme ? "":" dark")}>{props1.name[0]}</p>
       <div className={"other-text-content" + (lightTheme ? "":" dark")}>
       <p className={"con-title" + (lightTheme ? "":" dark")}>{props1.name}</p>
        <p className={"con-lastMessage" + (lightTheme ? "":" dark")}>{props1.message}</p>
        <p className={"self-timeStamp" + (lightTheme ? "":" dark")}>1:15pm</p>
       </div>
      </div>
    </div>
  )
}

export default MessageOthers