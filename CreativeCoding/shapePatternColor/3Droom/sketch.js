function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#FCD5CE");
  line (width/2, height/2, width/2, 0);
  line (width/2, height/2, 0, windowHeight);
  line (width/2, height/2, windowWidth, windowHeight);
}