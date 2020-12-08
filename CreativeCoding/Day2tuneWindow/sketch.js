//2.1 Tuning the window using more variables

function setup() {
  createCanvas(720, 720);
  noFill();
  strokeWeight(1);
  stroke(255, 0, 0);
}

function draw() {
  background(255);
  
  var windowPane = 10; // padding around box array
  var num = 100; //number of boxes in an array
  
  translate(windowPane, windowPane); //starting point of window (x, y)
  
  var sideLen = (720 - 2 * windowPane) / num //length of individual side of a box


  for (var x = 0; x < num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {
      quad(x, y, x + sideLen, y, x + sideLen, y + sideLen, x, y + sideLen);
    }
  }

  noLoop();
}