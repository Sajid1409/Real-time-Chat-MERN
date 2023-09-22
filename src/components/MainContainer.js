import React, { createContext } from 'react'
import './myStyles.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import { useState } from 'react'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export const myContext = createContext();
const MainContainer = () => {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey)
  const [refresh, setRefresh] = useState(true);
  return (
    <div className={"main-container" + (lightTheme ? "":" dark-main")}>
       <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <SideBar />
        <Outlet />
      </myContext.Provider>
      {/* <CreateGroups/> */}
      {/*<Welcome />*/}
     {/*  <ChatArea/> */}
     {/* <Users_Groups /> */}
    </div>
  )
}

export default MainContainer