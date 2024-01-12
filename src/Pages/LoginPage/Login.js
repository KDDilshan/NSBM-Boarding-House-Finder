import React from 'react'
import './login.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
  return (
    <div className="registerPage">
    <div className='signUpBox'>
        <div className="signUpBoxTop">
            <img src="/images/signupimg.png" alt="" className="signUpImg" />
            <br></br>
            <span className="welcomText">WELCOME</span>
        </div>
        <div className="userInputs">
            <div className="userInput">
              <span className="userName">Username</span>
              <br></br>
              <div className="nameInputContainer"> 
                  <PersonIcon/>
                  <input type="text" className="nameInput" />
              </div>
              <br></br>
              <span className="password">Password</span>
              <br></br>
              <div className="passwordContainer">
                  <LockIcon/>
                  <input type="text" className="passwordInput" />
              </div>  
                
                <div className="loginButtonContainer">
                    <span className="loginButton">Sign In</span>
                </div>
                <div className="signUpLink">Don't have a account SignUp</div>
            </div>
        </div>
    </div>
  </div>
  )
}
