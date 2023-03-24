const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");
var Sequelize = require("sequelize");
const bodyParser=require("body-parser");
const Routes=require("./routes/routes");
// Loads env variables
require("dotenv").config()
// Initalizes express server
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// var corsOptions = {
//     origin: "http://localhost:3000"
//   };
//app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// app.use(bodyParser);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.raw());

// specifies what port to run the server on
const PORT = process.env.PORT || 3000;
// Adds json parsing middleware to incoming requests
app.use(express.json());

const Tutorials = require("./models/index.js");
//Tutorials.sequelize.sync();
// makes the app aware of routes in another folder
app.use('/api/data', Routes);
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));