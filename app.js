import express from 'express';
import pool from './config/db.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {usermethods} from './routes/user.js'
import {ownerDescription} from './routes/boardingHouse.js';
import {postroute,getroute} from './routes/reviws.js';
import {Ownerdata} from './routes/Bhouse.js';
import {verification} from './middleware/auth.js';

dotenv.config()

const app=express()
const port=4000


app.use(express.json())
app.use(cors())
app.use('/form',usermethods)
app.use('/ownerForm',ownerDescription)
app.use('/reviews',getroute)
app.use('/review',verification,postroute)
app.use('/owner',Ownerdata)

mongoose.connect(process.env.MONGODB_KEY)
.then(()=>{
    console.log('connected to mongose')
    app.listen(port,()=>{
        console.log(`node api runing over ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})