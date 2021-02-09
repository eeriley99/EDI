let bg;

let P1, P2, P3, P4, P5, P6, P7, P8, P9;

function preload() { // all photos 150 pixel width

  P1 = loadImage('assets/shirt.jpg');
  P2 = loadImage('assets/hose.jpg');
  P3 = loadImage('assets/hand.jpg');
  P4 = loadImage('assets/feather.jpg');
  P5 = loadImage('assets/cans.jpg');
  P6 = loadImage('assets/firewood.jpg');
  P7 = loadImage('assets/crib.jpg');
  P8 = loadImage('assets/caterpillar.jpg');
  P9 = loadImage('assets/bird.jpg');

  eRiley = loadImage('assets/eRiley.png');
  port = loadImage('assets/portfolio.png');
  resume = loadImage('assets/Resume.png');
  writing = loadImage('assets/writing.png');
  sWork = loadImage('assets/sWork.png');

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  // bg = createGraphics(innerWidth, innerHeight);
  noStroke();
  noFill();
 // frameRate(20);
}

function draw() {
  
  let n = 0;
  
  var num = 8; //variable for the number of squares in the array

  var sideLen = innerWidth / num; //variable for the side length of each square

  for (var dy = 0; dy < innerWidth * 2.16; dy = dy + sideLen) { //loop to create rows in the y direction

    for (var dx = 0; dx < innerWidth; dx = dx + sideLen) { // loop to create a row of squares in the x direction
    
      
      if (n < 9) {
        
        //tint(255, 255);
        
        var pics = [P1, P2, P3, P4, P5, P6, P7, P8, P9];

        image(pics[n], dx, dy, sideLen, sideLen);

        quad(dx, dy,
          dx + sideLen, dy,
          dx + sideLen, dy + sideLen,
          dx, dy + sideLen);

        n++;

      } else {

        image(P9, dx, dy, sideLen, sideLen);

        n = 0;
      }
      //tint(255, 0);
    }

  }

  changeCursor();

}


function changeCursor() {
  if (mouseY < 50 && mouseX < innerWidth / 2) {
        cursor('default');
    image(eRiley, mouseX, mouseY);
   // tint(255, 5);
  }

  if (mouseY < innerHeight / 2 && mouseY > 100 && mouseX < innerWidth / 2) {
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/shirt.png');
    image(resume, mouseX, mouseY);
    //tint(255, 5);
  }
  if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
    image(port, mouseX, mouseY);
    //tint(255, 5);
  }
  if (mouseY > innerHeight / 2 && mouseX < innerWidth / 2) {
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
    image(writing, mouseX, mouseY);
    //tint(255, 5);
  }
  if (mouseY > innerHeight / 2 && mouseX > innerWidth / 2) {
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/caterpillar.png');
    image(sWork, mouseX, mouseY);
    //tint(255, 5);
  }
}


function mousePressed() {


  if (mouseY < innerHeight / 2 && mouseY > 100 && mouseX < innerWidth / 2) {
    window.open("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", target = "_blank");
  }

  if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
    //range accounting for text length
    window.open("https://erinerileyart-blog-blog.tumblr.com/", target = "_blank");
  }

  if (mouseY > innerHeight / 2 && mouseX < innerWidth / 2) {
    //range accounting for text length
    window.open("http://www.artofdigitalfabrication.com/", target = "_blank");
  }

  if (mouseY > innerHeight / 2 && mouseX > innerWidth / 2) {
    //range accounting for text length
    window.open("https://erinriley.weebly.com/", target = "_blank");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}