// Import * Express * `burger.js`
const express = require("express");
const expRouter = express.Router();

// Create the `router` for the app, and export the `router` at the end of your file.
expRouter.get("/", (req,res) => {
    res.send("hello world");
});
module.exports = expRouter
