import React from 'react'
import './topLeft.css'

export default function TopLeft() {
  return (
    <div className='topLeftContainer'>
        <div className="fisrtRowimgContainer">
          <img src="./images/room1.webp" alt="" className="houseOne" />
          <img src="./images/room2.jpg" alt="" className="houseTwo" />
        </div>
        <div className="secondRowimgContainer">
          <img src="./images/room3.jpg" alt="" className="houseThree" />
          <img src="./images/room4.png" alt="" className="houseFour" />
        </div>
    </div>
  )
}
