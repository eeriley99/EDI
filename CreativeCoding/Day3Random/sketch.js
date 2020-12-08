//3. Random

function setup() {
  createCanvas(windowWidth, windowWidth);
  noFill();
  noStroke();
  frameRate(1);
}

function draw() {
  background(255);

  var windowPane = 10; // padding around box array
  var num = 5; //number of boxes in an array
  var shift = random(-10, 10); //degree of shift in quad
  var space = 40; //space between squares

  translate(windowPane + space / 2, windowPane + space / 2); //padding (x,y) start point

  var sideLen = (windowWidth - 2 * windowPane) / num //length of individual side of a box


  for (var x = 0; x < num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {

      fill(random(200, 255), 0, random(200, 255));
      
      quad(x + random(-shift, shift), y + random(-shift, shift), x + sideLen - space + random(-shift, shift), y + random(-shift, shift), x + sideLen - space + random(-shift, shift), y + sideLen - space + random(-shift, shift), x + random(-shift, shift), y + sideLen - space + random(-shift, shift));

    }
  }
}
