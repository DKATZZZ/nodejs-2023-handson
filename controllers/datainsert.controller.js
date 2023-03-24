const express=require('express');
const Tutorials= require("../models/index.js");
const usermodel = require('../models/tutorial.model.js');
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize')

async function insertdata(req,res){
    var readdata=await Tutorials();
    try{
        // var tutorial = {
        //     title: req.body.title,
        //     price: req.body.price,
        //     description: req.body.description? req.body.description : false
        //   };

        return readdata['sequelize'].query("INSERT INTO `mydb`.`tutorial`(title,price,description) values(?,?,?)", { type: readdata['sequelize'].QueryTypes.INSERT,
        replacements: [req.body.title, req.body.price, req.body.description]
        },
        )
          .then(data => {
            res.send(data.json());
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
    
    
    
    }catch(err){
        console.log('error in fetching data');
  console.error(err);
  res.send('Message:'  +err);
  res.end;
    }
}
module.exports=insertdata;