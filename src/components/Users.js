import React, { useContext, useEffect, useState } from 'react'
import logo from '../chat.svg'
import { IconButton } from '@mui/material'
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { refreshSidebarFun } from '../Features/refreshSidebar';
import { myContext } from './MainContainer';

const Users = () => {
  const lightTheme = useSelector((state)=>state.themeKey)
  const { refresh, setRefresh } = useContext(myContext);
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  if(!userData){
    console.log("User Not Authenticated");
    nav(-1);
  }

  useEffect(()=>{
    console.log('users refreshed');
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:8080/user/fetchUsers", config).then((data)=>{
      setUsers(data.data);
    })
  }, [refresh]);

  return (
    <div className='list-container'>
      <div className={"ug-header" + (lightTheme ? "":" dark")}>
        <img src={logo}
         style={{height: "2rem", width: "2rem"}}
        />
        <p className={"ug-title" + (lightTheme ? "":" dark")}>Available Users</p>
        <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
      </div>
      <div className={"sb-search" + (lightTheme ? "":" dark")}>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input 
           placeholder='search' 
           className={"search-box" + (lightTheme ? "":" dark")}
        />
      </div>
      <div className={"ug-list" + (lightTheme ? "":" dark")}>
        {users.map((user,index)=>{
          return (
            <div 
              className={"list-tem" + (lightTheme ? "":" dark")}
              key={index}
              onClick={()=>{
                const config = {
                headers: {
                  Authorization: `Bearer ${userData.data.to}`
                },
              };
              axios.post("http://localhost:8080/chat/",{
                userId:user._id,
              },
              config
              );
              dispatch(refreshSidebarFun());
            }}
            >
             <p className={"con-icon" + (lightTheme ? "":" dark")}>U</p>
             <p className={"con-title" + (lightTheme ? "":" dark")}>{user.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users