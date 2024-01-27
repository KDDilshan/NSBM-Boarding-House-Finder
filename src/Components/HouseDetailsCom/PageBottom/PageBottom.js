import React from 'react'
import './pageBottom.css'
import RatingCard from './RatingCard'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function PageBottom() {
  const [houses, setHouses] = useState([]);

  useEffect (()=> {
    const house = fetch();
    house
      .then ((res)=> res.json())
      .then ((data)=>setHouses(data))
      .catch((error)=>console.log(error))
  },[])
  const param = useParams()

  console.log(param)

  return (
    <div className='bottomContainer'>
      <h1>owner one {param.housedetailId}</h1>
        {
          houses.map((house)=>
          <p>{house.description}</p>)
        }
      <div className="ratingCards">
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      <RatingCard/>
      </div>
      
    </div>
  );
};
