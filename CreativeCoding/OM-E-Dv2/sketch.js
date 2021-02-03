
function preload (){
  window1 = loadImage ('/Images/DayWindow3.png');
  window2 = loadImage ('/Images/DayWindow2.png');
  window3 = loadImage ('/Images/DayWindow4.png');
  window4 = loadImage ('/Images/DayWindow5.png');

}

function setup() {
  createCanvas(windowWidth, windowWidth);
  frameRate (0.5);
noStroke ();
}

function draw() { 
  
var num = 4; 
  
var XsideLen = windowWidth / num;


    for (var dy = 0; dy < windowHeight; dy = dy + XsideLen * 0.53) {

        for (var dx = 0; dx < windowWidth; dx = dx + XsideLen) {
    
   quad(dx, dy,
                dx + XsideLen, dy,
                dx + XsideLen, dy + XsideLen * 0.53,
                dx, dy + XsideLen * 0.53);
      
    var pics = [window1, window2, window3, window4];

    image(pics [int(random (0,4))], dx, dy, XsideLen, XsideLen * 0.53);
  } 
    
  }
noLoop();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}