const express=require("express");
const Home = require("../controllers/home.js");
const dbconn  = require("../controllers/dbconn.js");
const insertdata = require("../controllers/datainsert.controller.js");
const getRecords = require("../controllers/select.controller.js");

const router=express.Router();

router.get('/',Home);
//add addition route

//add jsonpayload route

//getuser to connect and select data from db
router.get('/getdata',getRecords);

//connect to db
router.get('/connect',dbconn);
//insert data to db
router.post('/insertdata',insertdata);

module.exports=router;