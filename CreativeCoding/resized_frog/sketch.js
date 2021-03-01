// https://www.youtube.com/watch?v=OIfEHD3KqCg
// p5.js Sketch as Background

var canvas;

function preload() {
  img = loadImage("smFrog.jpg") //image is 500 x 250 pixels, 2:1
  print (img.width,img.height);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0,0);
  canvas.style ('z-index', '-1');
  noStroke();
}

function draw() {
  img.resize(windowWidth, windowHeight);
    for (i = 0; i <100;i++) { 
  
    let x = random(windowWidth);
    let  y = random(windowHeight);
    let c = img.get(x,y); 
    
    fill(c); 
    ellipse(x, y, 30, 30); 
} 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  img.resize(windowWidth, windowHeight);
  print (img.width,img.height);
}