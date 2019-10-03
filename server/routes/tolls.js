var express= require('express')
const router=express.Router()

const tollsController=require('../controller/tolls')

router.get('/splitOnly',tollsController.splitData)
router.get('/runProgram',tollsController.createTolls)
module.exports=router;