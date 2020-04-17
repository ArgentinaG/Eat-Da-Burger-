// setup the code to connect Node to MySQL.
var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 5000,

  // Your username
  user: "root",

  // Your password
  password: "dolphinBench1",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readColleges();
});

function readColleges() {
  connection.query("SELECT name FROM colleges", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

//  Export the connection  



