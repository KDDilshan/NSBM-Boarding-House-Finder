import express from 'express'
import {ownerlocation} from '../controllers/boardingHouseController.js';
import dotenv from 'dotenv'

const route=express.Router()
dotenv.config()

route.post('/api/userLocation',(req,res)=>{
    try {
        // const {ownerid}=req.params.id
        const {ownerid,uniID,latitude,logitude}=req.body
        const addlocation=ownerlocation(ownerid,uniID,latitude,logitude)
        res.status(200).send({message:"loactiona added sucessfully"})
    } catch (error) {
        console.log('The Error is ',error)
        res.status(404).send('Error in adding loction')
    }
    
})

export {route as loctionAdder}