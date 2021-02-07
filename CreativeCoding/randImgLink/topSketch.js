function setup() {
    createCanvas(innerWidth, innerHeight);
    eRiley = loadImage('assets/eriley.png');
    port = loadImage('assets/portfolio.png');
    resume = loadImage('assets/Resume.png');
    writing = loadImage('assets/writing.png');
    sWork = loadImage('assets/swork.png');
    topBuffer = createGraphics(innerWidth, innerHeight);
    noStroke();
    noFill();
}

function draw() {
    changeCursor();
}

function changeCursor() {
    if (mouseY < innerHeight / 16) {
        image(eRiley, mouseX, mouseY);
        tint(255, 5);
    }

    if (mouseY < innerHeight / 2 && mouseY < innerHeight / 16 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/shirt.png');
        image(resume, mouseX, mouseY);
        tint(255, 5);
    }
    if (mouseY < innerHeight / 2 && mouseY < innerHeight / 16 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
        image(port, mouseX, mouseY);
        tint(255, 5);
    }
    if (mouseY > innerHeight / 2 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
        image(writing, mouseX, mouseY);
        tint(255, 5);
    }
    if (mouseY > innerHeight / 2 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/sWork.png');
        image(sWork, mouseX, mouseY);
        tint(255, 5);
    }
}

function mousePressed() {


    if (mouseY < innerHeight / 2 && mouseY < innerHeight / 16 && mouseX < innerWidth / 2) {
        window.open("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", target = "_blank");
    }

    if (mouseY < innerHeight / 2 && mouseY < innerHeight / 16 && mouseX > innerWidth / 2) {
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
