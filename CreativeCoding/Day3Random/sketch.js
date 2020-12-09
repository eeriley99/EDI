//3 Random

function setup() {
    createCanvas(displayWidth, displayWidth);
    noFill();
    noStroke();
    frameRate(1);
}

function draw() {
    background(255);

    var windowPane = 10; // padding around box array
    var num = 4; //number of boxes in array
    var shift = random(-5, 5); //degree of shift in quad
    var space = 100; //space between squares

    translate(windowPane + space / 2, windowPane + space / 2); //(x,y) start point offset for padding

    var sideLen = (displayWidth - 2 * windowPane) / num //length of individual side of a box

    for (var x = 0; x < num * sideLen; x = x + sideLen) {
        for (var y = 0; y < num * sideLen; y = y + sideLen) {

            fill(random(200, 255), 0, random(200, 255));

            //a random shift is added to each vertex
            // add length of individual side of a box (num) and 
            //subtract space between squares (space) to keep spacing true

            quad(random(-shift, shift) + x,
                random(-shift, shift) + y,

                random(-shift, shift) + x + sideLen - space,
                random(-shift, shift) + y,

                random(-shift, shift) + x + sideLen - space,
                random(-shift, shift) + y + sideLen - space,

                random(-shift, shift) + x,
                random(-shift, shift) + y + sideLen - space);
        }
    }
}
