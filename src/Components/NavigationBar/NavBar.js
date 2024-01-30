// import React from 'react'
// import './navBar.css'
// import { NavLink } from 'react-router-dom'
// import {useState} from 'react'

// export default function NavBar() {
//   const [color,setColor]=useState(false)
//   const ChangeColor =() => {
//     if (window.scrollY >= 60){
//       setColor(true)
//     }
//     else{
//       setColor(false)
//     }
//   }
//   window.addEventListener('scroll',ChangeColor)


//   return (
//     <div className='NavBarBox'>
//             <div className="navBarLeft">
//                 <NavLink to='/' className="logo">campus bodima</NavLink>
//             </div>
//             <div className="navBarRight">
//               <div className="navBarIcons">
//                     <div className="iconButtons">
//                         <NavLink to='/Login' className='logbutton'>Login</NavLink>
//                         <NavLink to='/SignUp' className='signinbutton'>Sign up</NavLink>
//                         <NavLink to='/AboutUs' className='aboutbutton'>About us</NavLink>
//                     </div>
                     
//               </div>
//             </div>
//     </div>
//   )
// }

import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function NavBar() {
  const [menu, setMenu]= useState("login");
  const [color,setColor]=useState(false)
  const ChangeColor =() => {
    if (window.scrollY >= 60){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',ChangeColor)

  return (
    <div className={color? 'navbar navbar-bg' : 'navbar'}>
      <Link to='/'><img src="./images/BoardSphere-logos.jpeg" alt="" className="logo" /></Link>
     <ul className = "nav-menu" >  
       <li onClick={()=>{setMenu("login")}}> <Link style = {{ textDecoration: 'none', color:'white',}} to='/Login'> Login</Link>{menu==="login"?<hr/>:<></>} </li>
       <li onClick={()=>{setMenu("universities")}}><Link style={{ textDecoration: 'none', color:'white'}}to='/SignUp'>SignUp</Link>{menu==="universities"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("about Us")}}><Link style={{ textDecoration: 'none', color:'white', }}to='/AboutUs'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li>
     </ul>
    </div>
  )

}
