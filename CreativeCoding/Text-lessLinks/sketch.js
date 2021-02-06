//https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

//var link;

//var randDrawing;

let n = 0;

let P1;
let P2;
let P3;
let P4;
let P5;
let P6;
let P7;
let P8;
let P9;
let P10;



function preload() { // all photos 150 pixel width

    P1 = loadImage('../DrawingsBGrandom/assets/arm.jpg');
    P2 = loadImage('../DrawingsBGrandom/assets/shirt.jpg');
    P3 = loadImage('../DrawingsBGrandom/assets/hose.jpg');
    P4 = loadImage('../DrawingsBGrandom/assets/hand.jpg');
    P5 = loadImage('../DrawingsBGrandom/assets/feather.jpg');
    P6 = loadImage('../DrawingsBGrandom/assets/cans.jpg');
    P7 = loadImage('../DrawingsBGrandom/assets/firewood.jpg');
    P8 = loadImage('../DrawingsBGrandom/assets/crib.jpg');
    P9 = loadImage('../DrawingsBGrandom/assets/caterpillar.jpg');
    P10 = loadImage('../DrawingsBGrandom/assets/bird.jpg');

}


function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();

}

function draw() {

    var num = 4; //variable for the number of squares in the array

    var sideLen = innerWidth / num; //variable for the side length of each square

    for (var y = 0; y < innerHeight; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < innerWidth; x = x + sideLen) {

            if (n < 2) {
                imgPlace(n, sideLen, sideLen);

                quad(x, y,
                    x + sideLen, y,
                    x + sideLen, y + sideLen,
                    x, y + sideLen);

                n++;

            } else {
                n = 0;
                image(KG3, x, y, sideLen, sideLen);
            }

        }

    }

    // background(220);
    textFont("Amatic SC");
    textSize(32);
    changeCursor();

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

function imgPlace(n, x, y) {

    var pics = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

    image(pics[n], x, y);


}

function windowResized() {
    resizeCanvas(windowWidth, windowWidth * 2.16);
}
