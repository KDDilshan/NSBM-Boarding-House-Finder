import express from 'express';
import pool from './config/db.js';
import {usermethods} from './routes/user.js';


const app=express()
const port=4000

app.use(express.json())
app.use('/form',usermethods)

app.listen(port,()=>{
    console.log(`connected to the port ${port}`)
})