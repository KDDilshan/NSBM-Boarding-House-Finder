import React from 'react'
import './loginNavbar.css'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Link } from 'react-router-dom';

export default function LoginNavbar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
            <Link to='/'><img src="./images/BoardSphere-logos.jpeg" alt="" className="logo" /></Link>
            </div>
            <div className="navBarRight">
              <div className="userProfile">
                   <div className="icon">
                        <AccountCircleTwoToneIcon/>
                    </div> 
                    <span className="userName">user Name</span> 
              </div>
              <div className="logOutButtonContainer">
              <Link to='/' className="logOutButton">Log out</Link>
              </div>
            </div>
    </div>
  )
}
