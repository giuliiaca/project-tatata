console.log("script loaded");

let express = require("express");

let app = express(); //we are activating express, and put it in a variable

let port = 3000; //choose the port

let server = app.listen(port); //posso scrivere anche(3000) port is the input

app.use(express.static("public"));

console.log("running server on http://localhost:" + port);
