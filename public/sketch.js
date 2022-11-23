let clientSocket = io(); //this function is from the file in html socket.io

clientSocket.on("connect", newConnection);

function newConnection() {
  //print your id
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 20);
}
