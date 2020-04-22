// setup the code to connect Node to MySQL.

// Importing mysql package to the connection.js file
var mysql = require("mysql");


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",

  // Your password
  password: "dolphinBench1",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the Mysql server");
});

//  Export the connection  
module.exports = connection;




