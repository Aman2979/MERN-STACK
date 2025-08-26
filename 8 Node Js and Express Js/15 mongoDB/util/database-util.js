const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Aman@2979",
  database: "airbnb",
});

module.exports = pool.promise();
