const express = require('express')
const userController = require('../controller/userController')



const userRouter = express.Router();



userRouter.route('/').post(userController.submitForm).get(userController.getUsers)


module.exports = userRouter