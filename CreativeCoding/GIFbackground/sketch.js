let gif;

function preload() {
  gif = loadImage('assets/comp.gif');//dimensions 80x82 px
  
}

function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
 // frameRate (1);
  noStroke ();
}

function draw() { 
  
var num = 10; //variable for the number of squares in the array
   
  var sideLen = windowWidth/num; //variable for the side length of each square
  
  for (var y = 0; y < windowWidth; y = y + sideLen) {//loop to create rows in the y direction
    
     for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction
    
  quad(x, y,
    x + sideLen, y,
    x + sideLen, y + sideLen,
    x, y + sideLen);
       
   image(gif, x + (sideLen/2 - 40), y + (sideLen/2 - 40));
       
  } 
    
  }

}

  


  