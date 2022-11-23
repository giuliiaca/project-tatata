let myColor;
let colors = ["red", "green", "blue", "pink", "gray"];

let clientSocket = io(); //this function is from the file in html socket.io

clientSocket.on("connect", newConnection);

function newConnection() {
  //print your id
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse);

function otherMouse(dataReceived) {
  fill(dataReceived.color);
  circle(dataReceived.x, dataReceived.y, 10);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    color: myColor,
  };

  clientSocket.emit("mouse", message);
}

function setup() {
  createCanvas(400, 400);
  myColor = random(colors);
}

function draw() {
  //  background(220);
  fill(myColor);
  circle(mouseX, mouseY, 20);
}
