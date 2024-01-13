import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {craeteoneuser,
        usercheak,
        loginuser} from '../controllers/usercontroller.js';

const router=express.Router()

router.post('/api/create',async(req,res)=>{
    try{
        const {name,password,role,gender,location,contactno}=req.body
        const hash=await bcrypt.hash(password,5)
        const create=craeteoneuser(name,hash,role,gender,location,contactno)
        res.status(200).json({create:'user created sucessfully'})
    }catch(error){
        console.log('Error in fetching data:',error)
        if (name===usercheak){
            res.status(409).json({error:"user alredy exist"})
        }else{
            res.status(500).json({error:"internal servar error"})
        }
    }
})

router.post('/api/login',async(req,res)=>{
    try{
        const{username,password}=req.body
        const log=await loginuser(username)

        if(log){
            const cheaking=await bcrypt.compare(password,log)
            if(cheaking){
                const user={name:username}
                const accesstoken=jwt.sign(user,process.env.TOKEN_KEY,{expiresIn:"1m"})
                res.send(accesstoken)
            }else{
                res.status(404).send("invaid password")
            }           
        }else{
            res.status(404).send("user not found")
        }
        
    }catch(error){
        console.log('Error in login user:',error)
        res.status(404).send('no user found')
    }
})

export {router as usermethods}
