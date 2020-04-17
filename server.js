const express = require("express");
const app = express();

const port = port();

app.get('/, (req,res)=> {
    res.send("hello");
});

app.listen(port);
