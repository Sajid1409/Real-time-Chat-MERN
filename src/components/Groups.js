import React from 'react'
import logo from '../chat.svg'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const Groups = () => {
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div className='list-container'>
      <div className={"ug-header" + (lightTheme ? "":" dark")}>
        <img src={logo}
         style={{height: "2rem", width: "2rem"}}
        />
        <p className={"ug-title" + (lightTheme ? "":" dark")}>Online Groups</p>
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
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "":" dark")}>
          <p className={"con-icon" + (lightTheme ? "":" dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "":" dark")}>Test User</p>
        </div>
        
      </div>
    </div>
  )
}

export default Groups