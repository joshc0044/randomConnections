// https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io
// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Start a socket connection to the server
  socket = io.connect('http://localhost:8080');
  
  rectCoord();
  // We make a named custom event called 'mouseConnectTimeStamp' and receive timestamp from server
  socket.on('mouseConnectTimeStamp',
    function(data) {
      console.log("Got timestamp from server: " + data.timeStamp);
      fill(0,0,255);
      //noStroke();
	  var randX = random() * windowWidth;
	  var randY = random() * windowHeight;
	  stroke(255, 204, 0);
	  point(randX, randY); 
      //ellipse(randX,randY,80,80);
    }
  );
}
function rectCoord() {
  background(0);
  noFill();
  stroke(255);
  stroke(0, 153, 255);
  stroke(255, 153, 0);
  rect(width*0.25, height*0.1, width * 0.5, height * 0.8);
}
function draw() {
}
