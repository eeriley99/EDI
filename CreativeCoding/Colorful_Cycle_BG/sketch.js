let n = 0;

let KG1;
let KG2;
let KG3;

function preload() {
    KG1 = loadImage('KG1.JPG');
    KG2 = loadImage('KG2.JPG');
    KG3 = loadImage('KG3.JPG');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    noFill();
}

function draw() {

    var num = 5; //variable for the number of squares in the array

    var XsideLen = windowWidth / num; //variable for the X side length of each square

    var YsideLen = (windowWidth / num) / 4; //variable for the y side length of each square

    for (var dy = 0; dy < windowWidth; dy = dy + YsideLen) {

        for (var dx = 0; dx < windowWidth; dx = dx + XsideLen) {

            if (n < 2) {
                imgPlace(n, dx, dy, XsideLen, YsideLen);

                quad(dx, dy,
                    dx + XsideLen, dy,
                    dx + XsideLen, dy + YsideLen,
                    dx, dy + YsideLen);

                n++;

            } else {
                n = 0;
                image(KG3, dx, dy, XsideLen, YsideLen);
            }

        }

    }
    noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
