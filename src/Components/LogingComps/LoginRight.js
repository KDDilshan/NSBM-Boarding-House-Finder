import React from 'react'
import './loginRight.css'
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginRight() {
    const [loginData, setLoginData] = useState({
        username : "",
        password : "",
    })

    const handleChange = (event) =>{
        const{name, value} = event.target;
        setLoginData ((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5000/v2/api/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          });
    
          if (response.ok) {
            console.log('Login successfully');
            // Optionally, you can handle the success response from the backend
          } else {
            console.error('Failed to Login');
            // Optionally, you can handle the error response from the backend
          }
        } catch (error) {
          console.log('Error Login:', error);
          // Handle other potential errors, such as network issues
        }
    
      };

  return (
    <div className="registerPage">
        <form onSubmit={handleSubmit}>
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
                        <input type="text" name="username" value={loginData.username} onChange={handleChange} className="nameInput" />
                    </div>
                    <br></br>
                    <span className="password">Password</span>
                    <br></br>
                    <div className="passwordContainer">
                        <LockIcon/>
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} className="passwordInput" />
                    </div>       
                    <button type="submit" className="button">SignUp</button>
                    <div className="signUpLink">Don't have a account SignUp</div>
                </div>
            </div>
        </div>
        </form>    
    </div>
  )
}
