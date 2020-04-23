// Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file
// Importing the orm file that is in the config folder
const orm = require("../config/orm");
// Creating a variable that hold three methods
const crudBurger = {
    // creating a method to affect/render all the burgers within the database
    all: function (cb) {
        orm.all("burgers", function (res) {

            cb(res)

        })
    },
 // creating a method to submit a new burger entry withing the database (creating a new data entry)
    create: function (name, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb)
    },
// Creating a method to update the devoured status in the database
    update: function (id,cb ) { 
        const burgerId = id()
        orm.update("burgers",
        {
            devoured:true
        }, burgerId, cb)

    },
};
module.exports = crudBurger;