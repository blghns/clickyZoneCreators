var img;
function preload() {
  img = loadImage("rob.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // desktop
  if (mouseIsPressed && (mouseButton === LEFT) && touches.length === 0) {
    push();
    image(img, mouseX-img.width/2, mouseY-img.height/2);
    pop();
  }
  // mobile
  // if (touches.length === 1) {
  //   push();
  //   translate(-img.width/2, -img/height/2);
  //   image(img, touches[0].x, touches[0].y);
  //   pop();
  // } 
}

// this prevents dragging screen around
function touchMoved() {
  return false;
}

function touchEnded() {
  if (touches.length === 3) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}