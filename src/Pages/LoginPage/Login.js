import React from 'react'
import './login.css'
import LoginRight from '../../Components/LogingComps/LoginRight'
import LoginLeft from '../../Components/LogingComps/LoginLeft'

export default function Login() {
  return (
    <div className='loginPageContainer'>
      <LoginLeft/>
      <LoginRight/>
    </div>
  )
}
