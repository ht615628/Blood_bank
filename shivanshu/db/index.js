// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR IN APP: ",error)
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`process running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODN connection failed, error:",err);
})









/*
import express from "express"
const app = express()


( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:",error)
            throw error

        })
        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error);
        throw error
    }
})

*/