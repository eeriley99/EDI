var link;

function preload() {

  arm = loadImage('assets/arm.jpg');
  shirt = loadImage('assets/shirt.jpg');
  hose = loadImage('assets/hose.jpg');
  hand = loadImage('assets/hand.jpg');
  feather = loadImage('assets/feather.jpg');
  cans = loadImage('assets/cans.jpg');
  firewood = loadImage('assets/firewood.jpg');
  crib = loadImage('assets/crib.jpg');
  caterpillar = loadImage('assets/caterpillar.jpg');
  bird = loadImage('assets/bird.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5);
  noStroke();
}

function draw() {

  var num = 4; //variable for the number of squares in the array

  var sideLen = windowWidth / num; //variable for the side length of each square

  for (var y = 0; y < windowWidth; y = y + sideLen) { //loop to create rows in the y direction

    for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
      quad(x, y,
        x + sideLen, y,
        x + sideLen, y + sideLen,
        x, y + sideLen);

      imgPlace(x, y);
    }
  }

  noLoop();

}

function imgPlace(x, y) {

  var pics = [arm, shirt, hose, hand, feather, cans, firewood, crib, caterpillar, bird];

  let r = random(0, 9);

  image(pics[int(r)], x, y);
  print(int(r));

  
  if (int(r) == 3) {
    fill(255);


    link = createA("https://erinriley.weebly.com/", "Portfolio", target = "_blank");
    link.position(x, y);
  }
  if (int(r) == 4) {
    link = createA("https://www.instagram.com/ga_edl/?hl=en", "Instagram", target = "_blank");
    link.position(x, y);
  }


  if (int(r) == 5) {
    link = createA("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", "Resume", target = "_blank");
    link.position(x, y);
    
  }

}