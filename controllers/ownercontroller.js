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

export const getLocation=(async(req,res)=>{
    try {
        const [result]=await pool.query(`
        
        `)
    } catch (error) {
        
    }
})