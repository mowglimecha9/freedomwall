var heightWindow = window.innerHeight;
var widthWindow = window.innerWidth;
var defaultbg = "rgba(255,255,255)";

var socket;


function setup() {
  createCanvas(widthWindow,heightWindow);
  background(defaultbg);

  socket = io.connect('http://192.168.1.1:3000');
  socket.on('mouse',newDrawing);

}

function newDrawing(data) {
	stroke("white");
	strokeWeight(3);
	fill(255,0,100);
	ellipse(data.x,data.y,20,20);
}

function mouseDragged() {
	console.log('Sending Mouse Data: '+ mouseX +','+ mouseY);
	stroke("white");
	strokeWeight(3);
	fill(56);
	ellipse(mouseX,mouseY,100,100);

	var data = {
		x: mouseX,
		y: mouseY,
	}

	socket.emit('mouse',data);
}


function draw() {
}