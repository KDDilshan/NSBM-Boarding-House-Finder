import mysql from 'mysql2';
import pool from '../config/db.js';

export const createReview=(async(userId, houseId,rating,description)=>{
    try{
        const [review] = await pool.query(`
        INSERT INTO reviews(UserID, HouseID, Rating, Comment)
        VALUES(?, ?, ?, ?)`,
        [userId, houseId, rating, description]);
        return review
    }catch(error){
        console.log('the error in creating user:',error)
        throw new Error ('Cant craete new user in db')
    }
})

export const getReview = async (description, username, reviewDate) => {
    try {
        const [reviews] = await pool.query(`
            SELECT
                u.UserName,
                r.Comment AS ReviewDescription,
                r.Rating,
                r.ReviewDate
            FROM
                reviews r
            JOIN
                users u ON r.UserID = u.UserID
        `);
        return reviews;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error
    }
};