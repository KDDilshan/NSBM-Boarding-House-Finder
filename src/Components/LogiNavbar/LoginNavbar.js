import React from 'react'
import './loginNavbar.css'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function LoginNavbar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
                <a href='/' className="logo">campus bodima</a>
            </div>
            <div className="navBarRight">
              <div className="userProfile">
                   <div className="icon">
                        <AccountCircleTwoToneIcon/>
                    </div> 
                    <span className="userName">user Name</span> 
              </div>
              <div className="logOutButtonContainer">
              <a href='/' className="logOutButton">Log out</a>
              </div>
            </div>
    </div>
  )
}
