import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {createReview} from '../controllers/reviewController.js';

const router=express.Router()

router.post('/api/addReview',(req,res)=>{
    try{
        const{rating,description,date}=req.body
        const result=createReview(rating,description,date)
        res.status(200).send("Its created")
    }catch(error){
        console.log('error in reviews :',error)
        res.status(404).send('error cretting a description')
    }
})



export {router as reviewRoutes}