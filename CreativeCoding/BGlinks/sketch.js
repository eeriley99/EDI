let P1, P2, P3, P4, P5, P6, P7, P8, P9;

function preload() { // all photos 150 pixel width

    P1 = loadImage('assets/shirt.jpg');
    P2 = loadImage('assets/hose.jpg');
    P3 = loadImage('assets/hand.jpg');
    P4 = loadImage('assets/feather.jpg');
    P5 = loadImage('assets/cans.jpg');
    P6 = loadImage('assets/firewood.jpg');
    P7 = loadImage('assets/crib.jpg');
    P8 = loadImage('assets/caterpillar.jpg');
    P9 = loadImage('assets/bird.jpg');

}

function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();
    noFill();
}

function draw() {

    let n = 0;

    var num = 8; //variable for the number of squares in the array

    var sideLen = innerWidth / num; //variable for the side length of each square

    for (var dy = 0; dy < innerWidth * 2.16; dy = dy + sideLen) { //loop to create rows in the y direction

        for (var dx = 0; dx < innerWidth; dx = dx + sideLen) { // loop to create a row of squares in the x direction

            var pics = [P1, P2, P3, P4, P5, P6, P7, P8, P9];

            let n = random(0, 9);

            image(pics[int(n)], dx, dy, sideLen, sideLen);

            quad(dx, dy,
                dx + sideLen, dy,
                dx + sideLen, dy + sideLen,
                dx, dy + sideLen);

            if (int(n) == 3) {

                link = createA("https://erinriley.weebly.com/", "teaching", target = "_blank");
                link.position(dx, dy);
            }

            if (int(n) == 4) {
                link = createA("https://erinerileyart-blog-blog.tumblr.com/", "portfolio", target = "_blank");
                link.position(dx, dy);
            }

            if (int(n) == 5) {
                link = createA("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", "Resume", target = "_blank");
                link.position(dx, dy);
            }
        }
    }


    noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
