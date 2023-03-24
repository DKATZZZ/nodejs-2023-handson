const express=require("express");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../models/localconfig.js");

function Tutorials(req,res){

  const basename = path.basename(module.filename);
  
  // const basename = path.basename(__filename);
  const db = {};
  
  //const sequelize = new Sequelize(config.url, config);
  
  const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,port:3306,dialect:config.dialect,
    pool:{
      max:1,
      min:0,
      idle:1000
    }
  });
  
  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file));
      (sequelize,Sequelize.DataTypes);
      db[model.name] = model;
    });
  
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  //now authenticate your db connection
  sequelize.authenticate().then(()=>{
    console.log("connection established successfully");
  }).catch((err)=>{
    console.log("unable to connect to db:");
  })
  
  db["sequelize"]=sequelize;
  db["Sequelize"]=sequelize;
  
  //  db.sequelize = sequelize;
  // db.Sequelize = Sequelize;
  module.exports=db;
  return db;

}
module.exports=Tutorials;
