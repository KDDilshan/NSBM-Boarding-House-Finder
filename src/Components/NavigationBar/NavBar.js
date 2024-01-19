import React from 'react'
import './navBar.css'


export default function NavBar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
                <a href='/' className="logo">campus bodima</a>
            </div>
            <div className="navBarRight">
              <div className="navBarIcons">
                    <div className="iconButtons">
                        <a href='/Login' className="logbutton">Log in</a>
                        <a href="/SignUp" className="signinbutton">Sign up</a>
                        <span className="aboutbutton">About us</span>
                    </div>
                     
              </div>
            </div>
    </div>
  )
}
