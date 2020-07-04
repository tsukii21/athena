var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "nikolai",
  password: "node",
  database: "mydb",
});

module.exports = connection;
