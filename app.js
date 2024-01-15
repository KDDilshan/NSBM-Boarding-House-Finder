import express from 'express';
import pool from './config/db.js';
import mongoose from 'mongoose';
import {usermethods} from './routes/user.js'
import {ownerDescription} from './routes/boardingHouse.js';




const app=express()
const port=4000

app.use(express.json())
app.use('/form',usermethods)
app.use('/owner',ownerDescription)

mongoose.connect('mongodb+srv://root:123456root@nodeexpresssprojects.dd45m8n.mongodb.net/Documents?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongose')
    app.listen(port,()=>{
        console.log(`node api runing over ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})