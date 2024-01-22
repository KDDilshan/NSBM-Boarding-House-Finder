import React from 'react'
import './adminPanel.css'
import LoginNavbar from '../../Components/LogiNavbar/LoginNavbar'
import AdminCom from '../../Components/AdminCom/AdminCom'

export default function AdminPanel() {
  return (
    <div>
      <LoginNavbar/>
      <AdminCom/>
    </div>
  )
}
