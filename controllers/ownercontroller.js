import mysql from 'mysql2';
import pool from '../config/db.js';

export const getowners=(async(req,res)=>{
    try{
        const [owners]=await pool.query(`
        SELECT UserName,UserID FROM users
        WHERE Role = 'owner'`)
        return owners
    }catch(error){
        console.log('The error in selcing owner name:',error)
        throw new Error("no owner names found")
    }
})

export const getLocation=(async(Latitude,Longitude)=>{
    try {
        const [result]=await pool.query(`
        SELECT Latitude,Longitude FROM boardinghouses`)
        return result
    } catch (error) {
        console.log('the error in collecting loctions:',error)
        throw new Error('no loction found')
    }
})