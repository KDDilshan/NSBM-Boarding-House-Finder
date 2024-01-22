import React from 'react'
import './ratingCard.css'
import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function RatingCard() {
    const [rating, setRating] = useState (null);
    const [hover, setHover] = useState (null);
  return (
    <div className='cardContainer'>
      <div className="cardTop">
        <div className="userDetail">
                <AccountCircleOutlinedIcon/>
            <div className="userName">
                <span className="name">DMD Silva</span>
            </div>
        </div>
        <div className="starRating">
            {[...Array(5)].map((star,index) => {
                const currentRating = index +1;
                return (
                    <label>
                        <input type='radio' 
                        name='rating' 
                        value={currentRating} 
                        onClick={()=> setRating(currentRating)}
                        />
                        <FaStar className='star'
                        color={currentRating <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                        onMouseEnter={()=> setHover(currentRating)}
                        onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
      </div>
      <div className="cardBottom">
            <p>comment</p>
      </div>
    </div>
  )
}
