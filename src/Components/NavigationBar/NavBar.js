import React from 'react'
import './navBar.css'
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
                <span className="logo">campus bodima</span>
            </div>
            <div className="navBarRight">
              <div className="navBarIcons">
                    <HomeIcon className='homeicon'/>
                    <div className="iconButtons">
                        <a href='/' className="logbutton">Log in</a>
                        <a href="/SignUp" className="signinbutton">Sign up</a>
                        <span className="aboutbutton">About us</span>
                    </div>
                     
              </div>
            </div>
    </div>
  )
}
