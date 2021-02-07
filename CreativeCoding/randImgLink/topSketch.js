function setup() {
    createCanvas(innerWidth, innerHeight);
    port = loadImage('assets/portfolio.png');
    resume = loadImage('assets/Resume.png');
    writing = loadImage('assets/writing.png');
    topBuffer = createGraphics(innerWidth, innerHeight);
    noStroke();
    noFill();
}

function draw() {
    changeCursor();
}

function changeCursor() {
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/cans.png');
        image(resume, mouseX, mouseY);
        tint(255, 10);
    }
    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
        image(port, mouseX, mouseY);
        tint(255, 10);
    }
    if (mouseY > innerHeight / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
        image(writing, mouseX, mouseY);
        tint(255, 10);
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
