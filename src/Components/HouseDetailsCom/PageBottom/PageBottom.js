import React from 'react'
import './pageBottom.css'
import RatingCard from './RatingCard'

export default function PageBottom() {
  return (
    <div className='bottomContainer'>
      <div className="discriptionContainer">
        <span className="discription">Discription</span>
        <p className="houseDiscription">All units are furnished and do not have room for additional furniture. Therefore, please leave your three piece sofa in storage.
Each resident will be provided a ski locker in addition to their unit. These lockers do not come with locks, we recommend residents bring their own.</p>
      </div>
      <div className="ratingCards">
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      </div>
      
    </div>
  )
}
