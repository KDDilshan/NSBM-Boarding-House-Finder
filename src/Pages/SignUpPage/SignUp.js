import React from 'react'
import './signup.css'
import SignUpRight from '../../Components/SignUpComps/SignUpRight'
import SignUpLeft from '../../Components/SignUpComps/SignUpLeft'

export default function SignUp() {
  return (
    <div className='pageContainer'>
      <SignUpLeft/>
      <SignUpRight/>
    </div>
  )
}
