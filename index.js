const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes')
// import dotenv from 'dotenv'
const  dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api", userRoutes)

const mongoUrl = process.env.ATLAS_API_KEY;

mongoose.connect(mongoUrl).then(() =>{
    console.log("mongodb connect successful")
}).catch((err) =>{
    console.log('error in mongodb connection',err)
})


app.listen(PORT, () =>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})

// index.js
module.exports = app;
