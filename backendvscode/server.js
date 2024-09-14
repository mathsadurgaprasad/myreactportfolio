const express = require('express')

// const app = express()

const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const mongoose = require('mongoose')
const app = require('./index.js')


const DB = process.env.DATABASE.replace("<PASSWORD>" , process.env.DATABASE_PASSWORD)

mongoose.connect(DB , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con => {
    console.log("DB connection successfull")
})


// app.get("/api/get/form" , (req , res) => {
//     res.status(200).json({
//         status:"success"
//     })
// })

app.listen(3000 , () => {
    console.log("Server Started Running")
})



