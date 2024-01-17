import React from 'react'
import './boardingLeft.css'

export default function BoardingLeft() {
  return (
    <div className='leftPaneContainer'>
      <div className="boardingBox">
        <div className="uniDetails">
          <div className="uniBox">
            <span className="uniName">NSBM</span>
            <img src="./images/nsbm.jpg" alt="" className="uniImg" />
          </div>
        </div>
        <div className="boardinDetails">
          <div className="ownerDetails">
            <a href="/HouseDetails" className="ownerName">owner name</a>
          </div>
          <br></br>
          <div className="ownerDetails">
            <a href="/HouseDetails" className="ownerName">owner name</a>
          </div>
          <br></br>
          <div className="ownerDetails">
            <a href="/HouseDetails" className="ownerName">owner name</a>
          </div>
          <br></br>
          <div className="ownerDetails">
            <a href="/HouseDetails" className="ownerName">owner name</a>
          </div>
          <br></br>
          <div className="ownerDetails">
            <a href="/HouseDetails" className="ownerName">owner name</a>
          </div>
        </div>
      </div>     
    </div>
  )
}
