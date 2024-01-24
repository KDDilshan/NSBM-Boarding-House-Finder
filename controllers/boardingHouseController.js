import mysql from 'mysql2'
import pool from '../config/db.js'

export const ownerlocation=(async(ownerid,uniID,latitude,longitude)=>{
    try {
        const [result]=await pool.query(`
        INSERT INTO boardinghouses(OwnerID,UniversityID,Latitude,Longitude)
        VALUES(?,?,?,?)`,[ownerid,uniID,latitude,longitude])
        return result
    } catch (error) {
        console.log('Error is:',error)
        throw new Error('error in databse qurry')
    }  
})
