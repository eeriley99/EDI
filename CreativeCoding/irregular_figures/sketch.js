//3 Random

function setup() {
    createCanvas(windowWidth, windowWidth);
    strokeWeight(1);
    frameRate(1);
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/clickFinger.gif');
}

function draw() {
    background(255);

    var windowPane = 10; // padding around box array
    var num = 20; //number of boxes in array
    var shift = random(-5, 5); //degree of shift in quad
    var space = 100; //space between squares

    translate(windowPane + space / 2, windowPane + space / 2); //(x,y) start point offset for padding

    var sideLen = (windowWidth - 2 * windowPane) / num //length of individual side of a box

    for (var x = 0; x < num * sideLen; x = x + sideLen) {
        for (var y = 0; y < num * sideLen; y = y + sideLen) {

            stroke(random(215, 255), random(215, 255), 0);

            fill(random(215, 255), random(215, 255), 0, 150);

            //a random shift is added to each vertex
            // add length of individual side of a box (num) and 
            //subtract space between squares (space) to keep spacing true

            rotate(PI / 3.0);

            beginShape();
            vertex(random(-shift, shift) + x,
                random(-shift, shift) + y);
            vertex(random(-shift, shift) + x + 20,
                random(-shift, shift) + y);
            vertex(random(-shift, shift) + x + 20,
                random(-shift, shift) + y + 20);
            vertex(random(-shift, shift) + x + 40,
                random(-shift, shift) + y + 20);
            vertex(random(-shift, shift) + x + 40,
                random(-shift, shift) + y + 40);
            vertex(random(-shift, shift) + x,
                random(-shift, shift) + y + 40);
            endShape(CLOSE);


        }
    }

}
