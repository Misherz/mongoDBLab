//imports

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import gradeRoutes from './routes/gradeRoutes.mjs'

//setups
const app = express()
dotenv.config();


//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
let PORT = process.env.Port || 3001

//routes
app.use('/grades', gradeRoutes)

//


app.listen(PORT, (req, res)=>{
    console.log(`Server running on ${PORT}`)
})