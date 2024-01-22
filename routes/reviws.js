import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {createReview,getReview} from '../controllers/reviewController.js';

const router=express.Router()

router.post('/api/addReview',(req,res)=>{
    try{
        const{userId, houseId,rating,description}=req.body
        const result=createReview(userId, houseId,rating,description)
        res.status(200).send("Its created")
    }catch(error){
        console.log('error in reviews :',error)
        res.status(404).send('error cretting a description')
    }
})

router.get('/api/getReview',async(req,res)=>{
    try {
        const getonereview=await getReview()
        res.status(200).send(getonereview)
    } catch (error) {
        console.log('Error is :',error)
        res.status(404).send('Error has occocued in reviews')
    }
})



export {router as reviewRoutes}