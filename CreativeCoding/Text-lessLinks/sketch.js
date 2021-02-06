//https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

var link;

var randDrawing;

function preload() { // all photos 150 pixel width

    arm = loadImage('../DrawingsBGrandom/assets/arm.jpg');
    shirt = loadImage('../DrawingsBGrandom/assets/shirt.jpg');
    hose = loadImage('../DrawingsBGrandom/assets/hose.jpg');
    hand = loadImage('../DrawingsBGrandom/assets/hand.jpg');
    feather = loadImage('../DrawingsBGrandom/assets/feather.jpg');
    cans = loadImage('../DrawingsBGrandom/assets/cans.jpg');
    firewood = loadImage('../DrawingsBGrandom/assets/firewood.jpg');
    crib = loadImage('../DrawingsBGrandom/assets/crib.jpg');
    caterpillar = loadImage('../DrawingsBGrandom/assets/caterpillar.jpg');
    bird = loadImage('../DrawingsBGrandom/assets/bird.jpg');

}


function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();
}

function draw() {

    var num = 4; //variable for the number of squares in the array

    var sideLen = innerWidth / num; //variable for the side length of each square

    for (var y = 0; y < innerHeight; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < innerWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
            //background(255);
            var pics = [arm, shirt, hose, hand, feather, cans, firewood, crib, caterpillar, bird];

            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);
            image(pics[int(random(0, 10))], x + (sideLen / 2 - 75), y + (sideLen / 2 - 75));

        }
    }

    // background(220);
    textFont("Amatic SC");
    textSize(32);
    changeCursor();

    noLoop();
}

function changeCursor() {
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/cans.png');
        text("Resume", mouseX, mouseY);
    }
    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
        text("Portfolio", mouseX, mouseY);
    }
    if (mouseY > innerHeight / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
        text("Writing", mouseX, mouseY);
    }
}

function mousePressed() {
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        window.open("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", target = "_blank");
    }

    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        //range accounting for text length
        window.open("https://erinriley.weebly.com/", target = "_blank");
    }

    if (mouseY > innerHeight / 2) {
        //range accounting for text length
        window.open("http://www.artofdigitalfabrication.com/", target = "_blank");
    }
}
