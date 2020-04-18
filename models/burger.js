// Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file

const orm = require("../config/orm");
const crudBurger = {
    all: function(cb){
        orm.all("burgers",function(res){
            
            cb(res)
            
            })
    },
    create: function(name, cb) {
        orm.create("burgers",["burger_name","devoured"], [name, false], cb)
    },
    update:
};
module.exports = crudBurger;