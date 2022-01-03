var cSize = 720; //create canvas size for paper with this variable

function setup() {
  createCanvas(cSize + cSize/3, cSize);//canvas size is set to 4:3 ratio for 18 x 24 paper
  noFill();
  ellipseMode(CENTER);

}

function draw() {

  background(255,0,0);

  var windowPad = 40; //padding around circle array
  var windowPane = (cSize - 2 * windowPad); //size of window in pixels
  var num = 20; //circles in array x,y direction

  var sizeCirc = windowPane / num //size of individual circle in the array

  var r = sizeCirc / 2;//radius of circle

  translate(windowPad, windowPad) - r; //starting point of window

    for (var y = r; y < num * sizeCirc; y = y + sizeCirc) { //repeat circle row in the y direction
      for (var x = r; x < (num * sizeCirc) + (num * sizeCirc)/3; x = x + sizeCirc) { //repeat circle in the x direction
        for (var w = sizeCirc; w > 0; w = w - r) {//creates concentric circles and resets random radius
         ellipse(x, y, w, w);
          r = random(2, 20);
         }
      }
    }

  noLoop();

}
