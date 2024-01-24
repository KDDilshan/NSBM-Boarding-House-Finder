import express from 'express';
import dotenv from 'dotenv';
import {getowners,getLocation} from '../controllers/ownercontroller.js';
import { lazy } from 'react';

const router=express.Router()
dotenv.config()

router.get('/api/ownerData',async (req,res)=>{
    try{
        const alltheOwners=await getowners()
        const usernamesArray = alltheOwners.map(owner => owner.UserName);
        const useridArray=alltheOwners.map(owner=>owner.UserID)
        res.status(200).send({usernamesArray,useridArray})
    }catch(error){
        console.log('the error is:',error)
        res.status(404).send('results not found')
    }
})

router.get('/api/location',async(req,res)=>{
    try {
        const Location= await getLocation()
        const Latitude=Location.map(Latitude=>Latitude.Latitude)
        const logitude=Location.map(Longitude=>Longitude.Longitude)
        res.status(200).send({Latitude,logitude})
    } catch (error) {
        console.log('the error is',error)
        res.status(400).send("error in the databse")
    }
    
})

export {router as Ownerdata}