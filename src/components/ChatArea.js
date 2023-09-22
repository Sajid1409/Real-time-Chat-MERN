import { IconButton } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { useSelector } from "react-redux";
const ChatArea = () => {
 const lightTheme=useSelector((state)=>state.themeKey)
  return (
    <div className={"chatArea-container" + (lightTheme ? "":" dark")}>
      <div className={'chatArea-header' + (lightTheme ? "":" dark")}>
      <p className={"con-icon" + (lightTheme ? "":" dark")}>S</p>
      <div className={"header-text" + (lightTheme ? "":" dark")}>
      <p className={"con-title" + (lightTheme ? "":" dark")}>Sample Chat</p>
      <p className={"con-timeStamp" + (lightTheme ? "":" dark")}>Today</p>
      </div>
      <IconButton className={"icon" + (lightTheme ? "":" dark")}>
        <DeleteOutlineIcon />
      </IconButton>
      </div>
      <div className={"messages-container" + (lightTheme ? "":" dark")}>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      <MessageOthers/>
      <MessageSelf/>
      </div>
      <div className={"text-input-area" + (lightTheme ? "":" dark")}>
        <input 
          placeholder="Type a Message" className={"search-box" + (lightTheme ? "":" dark")}
        />
        <IconButton className={"icon" + (lightTheme ? "":" dark")}>
          <SendOutlinedIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea