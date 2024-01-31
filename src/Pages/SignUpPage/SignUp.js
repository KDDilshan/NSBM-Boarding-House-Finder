import React from 'react'
import './signup.css'
import SignUpRight from '../../Components/SignUpComps/SignUpRight'
import NavBar from '../../Components/NavigationBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function SignUp() {
  return (
    <div>
      <NavBar/>
        <SignUpRight/>
      <Footer/>
    </div>
    
  )
}
