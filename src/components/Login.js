import React, { useState } from 'react'
import logo from '../chat.svg'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Login = () => {
  const lightTheme = useSelector((state)=>state.themeKey);
  const [showLogin, setShowLogin] = useState(true);
  const [data, setData] = useState({name: "", email: "", password: ""});
  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e)=>{
    setData({...data, [e.target.name]:e.target.value});
  }
  
  const logInHandler= async (e)=>{
    try {
      const config={
        headers:{
          "Content-type": "application/json",
        },
      };
      const response = await axios.post("http://localhost:8080/user/login/",
      data,
      config
      );
      setLogInStatus({
        msg:"Success", key: Math.random(),
      });
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
       setLogInStatus({
        msg:"Invalid Username or Password",
        key:Math.random(),
       });
    }
  }

  const signUpHandler= async ()=>{
    try {
      const config = {
        headers: {
          "Content-type":"application/json",
        },
      };
      const response = await axios.post("http://localhost:8080/user/register/",
       data,
       config
      );
      navigate("/app/welcome");
      setSignInStatus({
        msg:"Success", key:Math.random()
      });
      localStorage.setItem("userData", JSON.stringify(response))
      
    } catch (error) {
      if(error.response.status === 405){
        setSignInStatus({
          msg:"Email Id already in use",
          key:Math.random(),
        })
       if(error.response.status === 406){
        setSignInStatus({
          msg:"User Name already taken choose another",
          key:Math.random()
        })
       }
      }
    }
  }


  return (
    <div className='login-container'>
      <div className='image-container dark-welcome'>
        <img src={logo} alt='logo' className='logo-img'/>
      </div> 
      {showLogin && (<div className='login-box'>
        <p className='login-text'>Login To Your Account</p>
      <TextField 
         id="standard-basic" 
         onChange={changeHandler}
         label="Username" 
         variant="outlined"
         name="name"
         onKeyDown={(e)=>{
          if(e.code=="Enter"){
            logInHandler();
          }
        }}
      />
      <TextField 
         id="outlined-password-input"
         onChange={changeHandler} 
         label="Password" 
         type="password"
         autoComplete='current-password'
         name="password" 
         onKeyDown={(e)=>{
          if(e.code=="Enter"){
            logInHandler();
          }
        }}
      />
      <Button 
        variant='outlined'
        onClick={logInHandler}
      >Login</Button>
      <p>Don't have an Account ? {" "} 
        <span
          className='hyper'
          onClick={()=>setShowLogin(false)}
        >
          Sign Up
        </span>
      </p>
      </div>)}
      {!showLogin && (
        <div className="login-box">
          <p className='login-text'>Create your Account</p>
          <TextField 
            onChange={changeHandler}
            id="standard-basic" 
            label="Enter User Name" 
            variant="outlined" 
            name="name"
            onKeyDown={(e)=>{
              if(e.code=="Enter"){
                signUpHandler();
              }
            }}
          />
          <TextField 
            onChange={changeHandler}
            id="standard-basic" 
            label="Enter Your Email" 
            variant="outlined" 
            name="email"
            onKeyDown={(e)=>{
              if(e.code=="Enter"){
                signUpHandler();
              }
            }}
          />
          <TextField 
            onChange={changeHandler}
            id="outlined-password-input" 
            label="Password" 
            type="password"
            autoComplete='current-password' 
            name="password"
            onKeyDown={(e)=>{
              if(e.code=="Enter"){
                signUpHandler();
              }
            }}
          />
          <Button 
            variant='outlined'
            onClick={signUpHandler}  
          >
            Sign Up
          </Button>
          <p>Already have an Account ?{" "}
            <span
              className='hyper'
              onClick={()=>{
                setShowLogin(true);
              }}
            >
              Log In
            </span>
          </p>
        </div>
      )}  
    </div>
  )
}

export default Login