function setup() {
  createCanvas(720, 720);
  noFill();
  ellipseMode(CENTER);
}

function draw() {

  background(255);

  var windowPad = 40; //padding around circle array
  var windowPane = (720 - 2 * windowPad); //size of window in pixels
  var num = 20; //circles in array x,y direction

  var sizeCirc = windowPane / num //size of individual circle in the array
  
  var r = sizeCirc / 2;//radius of circle

  translate(windowPad, windowPad) - r; //starting point of window
  
    for (var y = r; y < num * sizeCirc; y = y + sizeCirc) { //repeat circle row in the y direction
      for (var x = r; x < num * sizeCirc; x = x + sizeCirc) { //repeat circle in the x direction  
        for (var w = sizeCirc; w > 0; w = w - r) {//creates concentric circles and resets random radius 
         ellipse(x, y, w, w);
          r = random(2, 20);
         }
      }
    }

  noLoop();

}


