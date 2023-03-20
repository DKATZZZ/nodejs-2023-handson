module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "DBPassword123",
    DB: "db_schema",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };