//HOST: "Mysql@localhost:3306",
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "DBPassword123",
    DB: "mydb",
    dialect: "mysql",
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
