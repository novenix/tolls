var express= require('express')
const router=express.Router()
var multer = require('multer')

const tollsController=require('../controller/tolls')
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
// var upload = multer({ storage: storage })
var upload = multer({dest:'uploads/'});

// router.get('/splitOnly',tollsController.splitData)
router.get('/runProgram',upload.single('entrada.txt'),tollsController.createTolls)
module.exports=router;