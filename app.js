import express from 'express';
import pool from './config/db.js';

const app=express()
const port=4000

app.use(express.json())

app.listen(port,()=>{
    console.log(`connected to the port ${port}`)
})