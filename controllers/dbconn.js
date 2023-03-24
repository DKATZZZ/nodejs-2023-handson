const express=require('express');
const Tutorials= require("../models/index.js");
const usermodel = require('../models/localconfig.js');
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize');

function dbconn(req,res){
    var readdata=Tutorials();
     res.send('connected database successfully');
}
module.exports = dbconn;