const User = require('../model/userModel')


exports.submitForm = async (req , res) => {

    try{
        const userData = await User.create(req.body)
        console.log(req.body)
    
        res.status(201).json({
            status:'messege',
            messege_details:userData
        })
    }
    catch(err) {
        res.status(201).json({
            status:'failed',
            messege_details:err
        })
    }
}


exports.getUsers = async (req , res) => {

    try{
        const queryObj = {...req.query}
        const filter_list = ['sort' , 'limit']
        filter_list.forEach((item) => delete queryObj[item] )
        console.log(req.query , queryObj)
        const userData = await User.find(req.query)
    
        res.status(200).json({
            status:'messege',
            messege_details:userData
        })
    }
    catch(err) {
        res.status(201).json({
            status:'failed',
            messege_details:err
        })
    }
}
