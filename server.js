console.log("script loaded");

let express = require("express");

let app = express(); //we are activating express, and put it in a variable

let port = 3000; //choose the port

let server = app.listen(port); //posso scrivere anche(3000) port is the input

app.use(express.static("public"));

console.log("running server on http://localhost:" + port);

let serverSocket = require("socket.io");

let io = serverSocket(server); //io stands for input output
//i connect web service to the socket variable

//now we can start to mintor things
//https://socket.io/docs/v3/emit-cheatsheet/ link per vedere che event posso mettere

io.on("connection", newConnection); //which event we're waiting for

function newConnection(newSocket) {
  console.log(newSocket.id); //print all the information about the server-client,
  //mettendo id mi printa solo l'id del client - connection

  newSocket.on("mouse", mouseReceived);

  function mouseReceived(dataReceived) {
    console.log(dataReceived);
    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
