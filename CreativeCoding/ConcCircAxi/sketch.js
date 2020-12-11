/* 
Concentric Circle SVG eer 12/10/2020
export SVG 
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var Cx; //Canvas x 
var Cy; //Canvas y
var win; //design window
var num; // number of circles
var r; //radius of circle
var w; //width of circle

function setup() {
  Cx = 816; //Canvas x 8.5 inches
  Cy = 1056; //Canvas y 11 inches
  //space = 20; // space between concentric circles
  win = 800; //5 inches
  num = 5;
  r = 0;

  createCanvas(Cx, Cy, SVG); // Create SVG Canvas, set this to artboard size in pixels--this example is for an 8.5 x 11 paper in portrait orientation
  strokeWeight(1); // 1 for AxiDraw, 0.001 for laser
  stroke(0); // red is good for laser
  noFill(); // better not to have a fill for axidraw
}

function draw() {
  background(255);

  r = 0; //radius of circle
  w = win / num; // width of circle

  //translate starting point of window, add width/2 (radius)
  translate(((Cx - win) / 2) + w / 2, ((Cx - win) / 2) + w / 2 + (Cy - Cx) / 2);

  for (var y = 0; y < win; y = y + win / num) {
    for (var x = 0; x < win; x = x + win / num) {
        r = 2;     

for (var w = win/num; w > 0; w = w - r) { //creates concentric circles and resets random radius 
      ellipse(x, y, w, w);
 r = random(2, 20);
}
    }
  }

  //save("concCirc.svg"); // give file name

  noLoop();
}