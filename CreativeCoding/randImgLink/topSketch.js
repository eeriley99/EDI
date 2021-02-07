function setup() {
    createCanvas(innerWidth, innerHeight);
    img = loadImage('portfolio.png');
    topBuffer = createGraphics(innerWidth, innerHeight);
    noStroke();
    noFill();
}

function draw() {

    //   for (let a = 250; a > 0; a = a - 50) 
    fill(0, 0, 0);
    drawTopBuffer();
    image(topBuffer, 0, 0);


}

function drawTopBuffer() {

    textFont("Amatic SC");
    textSize(32);
    fill(0);
    changeCursor();
}

function changeCursor() {
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/cans.png');
        text("Resume", mouseX, mouseY);
    }
    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
        image(img, mouseX, mouseY);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
