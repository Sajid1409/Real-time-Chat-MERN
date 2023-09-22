import React from 'react'
import { useSelector } from 'react-redux'

const MessageSelf = () => {
  var props2={ name: "Jane Doe", message:"sample Reply"}
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div className='self-message-container'>
      <div className='messageBox'> 
        <p>{props2.message}</p>
        <p className='self-timeStamp'>1:16pm</p>
      </div>
    </div>
  )
}

export default MessageSelf