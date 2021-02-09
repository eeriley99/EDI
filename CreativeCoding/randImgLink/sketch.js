let bg;

let bg.P1, bg.P2, bg.P3, bg.P4, bg.P5, bg.P6, bg.P7, bg.P8, bg.P9;

function preload() { // all photos 150 pixel width

    bg.P1 = loadImage('assets/shirt.jpg');
    bg.P2 = loadImage('assets/hose.jpg');
    bg.P3 = loadImage('assets/hand.jpg');
    bg.P4 = loadImage('assets/feather.jpg');
    bg.P5 = loadImage('assets/cans.jpg');
    bg.P6 = loadImage('assets/firewood.jpg');
    bg.P7 = loadImage('assets/crib.jpg');
    bg.P8 = loadImage('assets/caterpillar.jpg');
    bg.P9 = loadImage('assets/bird.jpg');

    eRiley = loadImage('assets/eRiley.png');
    port = loadImage('assets/portfolio.png');
    resume = loadImage('assets/Resume.png');
    writing = loadImage('assets/writing.png');
    sWork = loadImage('assets/sWork.png');

}

function setup() {
    createCanvas(innerWidth, innerHeight);
    bg = createGraphics(innerWidth, innerHeight);
    noStroke();
    noFill();
    frameRate(20);
}

function draw() {
    let bg.n = 0;

    var bg.num = 8; //variable for the number of squares in the array

    var bg.sideLen = bg.innerWidth / bg.num; //variable for the side length of each square

    for (var bg.dy = 0; bg.dy < bg.innerWidth * 2.16; bg.dy = bg.dy + bg.sideLen) { //loop to create rows in the y direction

        for (var bg.dx = 0; bg.dx < bg.innerWidth; bg.dx = bg.dx + bg.sideLen) { // loop to create a row of squares in the x direction

            if (bg.n < 9) {
                bg.tint(255, 255);
                var bg.pics = [bg.P1, bg.P2, bg.P3, bg.P4, bg.P5, bg.P6, bg.P7, bg.P8, bg.P9];

                bg.image(bg.pics[bg.n], bg.dx, bg.dy, bg.sideLen, bg.sideLen);

                bg.quad(bg.dx, bg.dy,
                    bg.dx + bg.sideLen, bg.dy,
                    bg.dx + bg.sideLen, bg.dy + bg.sideLen,
                    bg.dx, bg.dy + bg.sideLen);

                bg.n++;

            } else {

                bg.image(bg.P9, bg.dx, bg.dy, bg.sideLen, bg.sideLen);

                bg.n = 0;
            }
            bg.tint(255, 0);
        }

    }


}
drawBottom();
changeCursor();
}

function changeCursor() {
    if (mouseY < 50 && mouseX < innerWidth / 2) {
        image(eRiley, mouseX, mouseY);
        tint(255, 5);
    }

    if (mouseY < innerHeight / 2 && mouseY > 100 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/shirt.png');
        image(resume, mouseX, mouseY);
        tint(255, 5);
    }
    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
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
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/caterpillar.png');
        image(sWork, mouseX, mouseY);
        tint(255, 5);
    }
}

function drawBottom() {



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
