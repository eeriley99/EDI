//Loops and variables, 10 x 10 grid
//make 10 squares in a row
//repeat that row down the page 10 times
//Create a square length variable
//Create a variable for the number squares

function setup() {
  createCanvas(720, 720);
  noFill();
  strokeWeight(1);
  stroke(255, 0, 0);
}

function draw() {
  background(220);
  translate(60, 60);

  //create a loop that moves this box in the x direction 10 times (60 pixels at a time)
  //create a loop that moves this row in the y direction 10 times (60 pixels at a time) 
  
  //For loop consists of three parts: initialization, condition, and iteration.
  
  var sideLen = 60;
  var num = 10;

  for (var x = 0; x < num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {
      quad(x, y, x + sideLen, y, x + sideLen, y + sideLen, x, y + sideLen);
    }
  }
  
  noLoop ();
}
