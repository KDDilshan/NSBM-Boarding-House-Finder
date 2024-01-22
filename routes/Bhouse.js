import express from 'express';
import dotenv from 'dotenv';
import {getowners} from '../controllers/ownercontroller.js';
import { lazy } from 'react';

const router=express.Router()
dotenv.config()

router.get('/api/ownerData',async (req,res)=>{
    try{
        const alltheOwners=await getowners()
        const usernamesArray = alltheOwners.map(owner => owner.UserName);
        res.status(200).send({usernamesArray})
    }catch(error){
        console.log('the error is:',error)
        res.status(404).send('results not found')
    }
})

// router.post('/api/location',async(req,res)=>{
//     const{Latitude,Longitude}=req.body
//     const Location= await getLocation(Latitude,Longitude)
// })

export {router as Ownerdata}