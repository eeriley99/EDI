var randDrawing;

function preload() { // all photos 150 pixel width

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

function setup() { //runs once
    createCanvas(windowWidth, windowWidth);
    noStroke();
    frameRate(.5);

}

function draw() {

    var num = 8; //variable for the number of squares in the array

    var sideLen = windowWidth / num; //variable for the side length of each square

    for (var y = 0; y < windowWidth; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction

            var pics = [arm, shirt, hose, hand, feather, cans, firewood, crib, caterpillar, bird];

            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);
            image(pics[int(random(0, 10))], x + (sideLen / 2 - 75), y + (sideLen / 2 - 75));

        }

    }
    noLoop();
}
