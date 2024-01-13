import mysql from 'mysql2';
import pool from '../config/db.js';

export const craeteoneuser=(async(name,password,role,gender,location,contactno)=>{
    try{
        const rolevalue=role==='user'?'user':'owner'
        const gendervalue=gender==='male'?'male':'female'

        const [user]=await pool.query(
            `INSERT INTO users(Username,Password,Role,Gender,Location,ContactNumber)
            VALUES(?,?,?,?,?,?)`
            ,[name,password,rolevalue,gendervalue,location,contactno])
        return user
    }catch(error){
        console.log('the error in creating user:',error)
        throw new Error ('Cant craete new user in db')
    }
})

export const usercheak=(async(username,password)=>{
    try{
        const [cheak]=await pool.query(
            `SELECT * FROM users
            WHERE Username=?`,
            [username])
        return cheak
    }catch(error){
        console.log('There is error in qurry DB:',error)
        throw new Error('no user in that name')
    }
    
})

export const loginuser=(async(username)=>{
    try{
        const [login]=await pool.query(
            `SELECT Password FROM users
            WHERE Username=?`,
            [username])
        if (login.length>0){
            const storedPassword=login[0].Password
           return storedPassword
        }else{
            return null
        }
    }catch(error){
        console.log('Eoor in databse qurry:',error)
        throw new Error('Cant find a user')
    }
    
})