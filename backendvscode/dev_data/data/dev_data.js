

// const app = express()
const User = require("../../model/userModel")
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const mongoose = require('mongoose')
const fs = require('fs')

const DB = process.env.DATABASE.replace("<PASSWORD>" , process.env.DATABASE_PASSWORD)
console.log(DB)
mongoose.connect(DB , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con => {
    console.log("DB connection successfull")
})

const readFile = JSON.parse(fs.readFileSync(`${__dirname}/data.json` , 'utf-8'))

const imoprtData = async () => {

    const usersData = await User.create(readFile)
    console.log(readFile , "created all the data")

}
const deleteAllData = async () => {

    await User.deleteMany()
    console.log("Deleted ALl the data")

}

if(process.argv[2] == "--import"){
    imoprtData()
}
else if(process.argv[2] =="--delete"){
    deleteAllData()
}
