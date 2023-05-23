const express=require('express')
const { getAllData } = require('../dataControl')
const router=express.Router()


router.route('/data').get(getAllData);

module.exports=router