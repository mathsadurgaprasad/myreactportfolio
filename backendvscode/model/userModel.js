const mongoose =require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true , 'Name is mandatory'],
    },
    email: {
        type:String,
        required:[true , 'email is mandatory'],
    },
    subject: {
        type:String,
        required:[true , 'subject is mandatory'],
    },
    content: {
        type:String,
        required:[true , 'content is mandatory'],
    },
    createdAt: {
        type:Date,
        default: Date.now()
    }
})

//creating model 

const User = mongoose.model("User" , userSchema )

module.exports = User