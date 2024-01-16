import mysql from 'mysql2';
import pool from '../config/db.js';

export const createReview=(async(description,rating)=>{
    try{
        const [review]=await pool.query(`
            INSERT INTO reviews(Comment)
            VALUES(?)`,[description])
        const [rate]= await pool.query(`
            INSERT INTO reviews(Rating)
            VALUES(?)`,[rating])
        return review,rate
    }catch(error){
        console.log('the error in creating user:',error)
        throw new Error ('Cant craete new user in db')
    }
})