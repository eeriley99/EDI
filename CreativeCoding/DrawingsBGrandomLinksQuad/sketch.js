var link;


function preload() {

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

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(0.5);
    noStroke();
}

function draw() {
    background(255);
    textFont("Amatic SC");
    fill(0);
    textSize(32);
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/cans.png');
        text("Resume", mouseX, mouseY);
    }
    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
        text("Portfolio", mouseX, mouseY);
    }
    if (mouseY > innerHeight) {
        cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
        text("Insta", mouseX, mouseY);
    }

    noFill();

    var num = 4; //variable for the number of squares in the array

    var sideLen = innerWidth / num; //variable for the side length of each square

    for (var y = 0; y < innerWidth; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < innerWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);

            imgPlace(x, y);
        }
    }



    noLoop();

}

function imgPlace(x, y) {

    var pics = [arm, shirt, hose, hand, feather, cans, firewood, crib, caterpillar, bird];

    let r = random(0, 9);


    image(pics[int(r)], x, y);
    print(int(r));
    print(x, y);


    if (int(r) == 5) {

        link = createA("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", "Resume", target = "_blank");

    }
}

function changeCursor() {

}

function mousePressed() {
    if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
        window.open("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", target = "_blank");
    }

    if (mouseY < innerHeight / 2 && mouseX > innerWidth / 2) {
        //range accounting for text length
        window.open("https://erinriley.weebly.com/", target = "_blank");
    }

    if (mouseY > innerHeight) {
        //range accounting for text length
        window.open("https://www.instagram.com/ga_edl/?hl=en", target = "_blank");
    }
}
