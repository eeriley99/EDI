function setup() {
  createCanvas(720, 720);
  stroke (225,225,225);
  background (100,200,200); 
  //strokeWeight (0);
  frameRate (1);
}

function draw() {
  translate(30,30);
  var width= 720-2*30;
  var height= 720-2*30;
  var shift= 1;
  var space= 10;
  var num= 10; + random(-shift, shift);
  var sideLen= width/num; 
  
  for(var y=0; y<height; y=y + sideLen){
    for(var x=0; x<width; x=x + sideLen){
      fill (random(225,210), random(100,100), random(200,150));
      quad(x+space+random(-shift,shift), y+space+random(-shift,shift), x+sideLen-space+random(-shift,shift), y+space+random(-shift,shift), x+sideLen-space+random(-shift,shift), y+sideLen-space+random(-shift,shift), x+space+random(-shift,shift), y+sideLen-space+random(-shift,shift));
    }
  }
noLoop();
}