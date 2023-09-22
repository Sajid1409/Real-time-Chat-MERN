import React, { useContext, useEffect, useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import axios from 'axios';
import { myContext } from './MainContainer';
import { refreshSidebarFun } from '../Features/refreshSidebar';

const SideBar = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey)
  const { refresh, setRefresh } = useContext(myContext)
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if(!userData){
    console.log("user not authenticated");
    nav("/");
  }

  const user = userData.data;
useEffect(()=>{
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  axios.get("http://localhost:8080/chat/", config).then((response) => {
    console.log("Data refresh in sidebar ", response.data);
    setConversations(response.data);
  });

},[refresh])


  return (
    <div className='sidebar-container'>
      <div className={"sb-header" + (lightTheme ? "":" dark")}>
        <div>
            <IconButton>
              <AccountBoxIcon className={"icon" + (lightTheme?"":" dark")} />
            </IconButton>
        </div>

        <div>
            <IconButton
              onClick={()=>navigate('users')}
            >
              <PersonAddIcon className={'icon' + (lightTheme?'':' dark')}/>
            </IconButton>
            <IconButton
              onClick={()=>navigate('groups')}
            >
              <GroupAddIcon className={'icon' + (lightTheme?'':' dark')}/>
            </IconButton >
            <IconButton 
              onClick={()=>navigate('create-groups')}
            >
              <AddCircleOutlineIcon className={'icon' + (lightTheme?'':' dark')} />
            </IconButton>
            <IconButton onClick={()=>{dispatch(toggleTheme())}}>
              {lightTheme && <NightsStaySharpIcon className={'icon' + (lightTheme?'':' dark')}/> }
              {!lightTheme && <LightMode className={'icon' + (lightTheme?'':' dark')} />}
            </IconButton>
        </div>
       
      </div>
      <div className={"sb-search" + (lightTheme ? "":" dark")}>
        <IconButton>
          <SearchIcon className={'icon' + (lightTheme?'':' dark')}/>
        </IconButton>
        <input 
          className={"search-box" + (lightTheme ? "":" dark")}
          type='text'
          placeholder='search'
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "":" dark")}>
        {conversations.map((conversation,index)=>{
          var chatName = "";
          if(conversation.isGroupChat){
            chatName=conversation.chatName;
          } else{
            conversation.users.map((user)=>{
              chatName = user.name;
            });
          }
          if(conversation.latestMessage === undefined){

          return (

            <div
            key={index}
            onClick={() => {
              console.log("Refresh fired from sidebar");
              // dispatch(refreshSidebarFun());
              setRefresh(!refresh);
            }}
          >
            <div
              key={index}
              className="conversation-container"
              onClick={() => {
                navigate(
                  "chat/" +
                    conversation._id +
                    "&" +
                    conversation.users[1].name
                );
              }}
              // dispatch change to refresh so as to update chatArea
            >
              <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                {conversation.users[1].name[0]}
              </p>
              <p className={"con-title" + (lightTheme ? "" : " dark")}>
                {conversation.users[1].name}
              </p>

              <p className="con-lastMessage">
                No previous Messages, click here to start a new chat
              </p>
              {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
            {conversation.timeStamp}
          </p> */}
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={index}
            className="conversation-container"
            onClick={() => {
              navigate(
                "chat/" +
                  conversation._id +
                  "&" +
                  conversation.users[1].name
              );
            }}
          >
            <p className={"con-icon" + (lightTheme ? "" : " dark")}>
              {conversation.users[1].name[0]}
            </p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>
              {conversation.users[1].name}
            </p>

            <p className="con-lastMessage">
              {conversation.latestMessage.content}
            </p>
            {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
            {conversation.timeStamp}
          </p> */}
          </div>
        );
      }
    })}
  </div>
</div>
          
  )
}

export default SideBar