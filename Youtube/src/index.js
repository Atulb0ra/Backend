// require('dotenv').config({path: './env'}) this is correct too but insconsistent since import statements after that which should be at start
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB() //connect and execute it
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.error("MONGO DB connection failed!!", err)
})













/*approach 1 to connect database

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express()

(async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:", error);
        throw error
       })
       app.listen(process.env.PORT, () =>{
        console.log("App is listening on port ${process.env.PORT}")
       })
    }
    catch(error){
        console.log("ERROR:", error)
        throw error
    }
})()



2nd approach is on db folder which is better



// use this if dev not work C:/Users/ASUS/OneDrive/Desktop/Backend/Youtube/src/index.js

*/