
const express = require("express")
const cors = require('cors')
const fs = require("fs")
const morgan = require("morgan")
const app = express()
const userRouter = require('./router/userRouter')


app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// app.use((req , res , next) => {
//     req.reqTime  = new Date().toLocaleDateString();
//     next();
// })

app.use('/api/get/form' , userRouter)


module.exports = app


