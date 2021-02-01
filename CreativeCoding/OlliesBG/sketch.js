let img;

function preload() {
    img = loadImage("images/DayWindow3.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
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

            image(img, dx, dy, XsideLen, XsideLen * 0.53);
        }


    }
    print(XsideLen);
    print(XsideLen * 0.53);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
