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
    image(img, mouseX-img.width/2, mouseY-img.height/2);
  }
  // mobile
   if (touches.length === 1) {
     image(img, touches[0].x-img.width/2, touches[0].y-img.height/2);
   } 
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
