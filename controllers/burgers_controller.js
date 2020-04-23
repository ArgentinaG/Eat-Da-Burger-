// Import * Express * `burger.js`
const express = require("express");
const expRouter = express.Router();
const crudBurger = require("../models/burger");

// Create the `router` for the app, and export the `router` at the end of your file.
expRouter.get("/", (req, res) => {
    crudBurger.all(function (burgerData) {
        res.render("index", {
            burger_data: burgerData
        });
    })
});

expRouter.put("/burgers/:id", (req, res) => {
    crudBurger.update(req.params.id, function (result) {
        console.log(result)
        res.sendStatus(200)
    });
});
expRouter.post("/newBurgers", (req, res) => {
    crudBurger.create(req.body.burger_name, function (result) {
        console.log(result)
        res.redirect("/")
    })
})

module.exports = expRouter
