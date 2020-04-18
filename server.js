const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

// Serve your static content utilizing use()
// app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const exphbs = require("express-handlebars");
// Engine()
app.engine("handlebars",exphbs({defaultLayout:"main"}));
// Set()
app.set("view engine","handlebars");
// This requires your route file
// var burgerRoute = require("./controllers/burgers_controller");
// Utilize your routes file
// app.use(burgerRoute);
app.listen(PORT, () => {
console.log("Server Works")
});




