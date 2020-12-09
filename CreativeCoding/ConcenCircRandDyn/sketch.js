var num;

function setup() {
    createCanvas(displayWidth, displayWidth);
    stroke(255);
    noFill();
    ellipseMode(CENTER);
    frameRate(1);
    num = random(2, 20); //circles in array x,y direction
}

function draw() {

    background(255);

    var windowPad = 40; //padding around circle array
    var windowPane = (displayWidth - 2 * windowPad); //size of window in pixels



    var sizeCirc = windowPane / num //size of individual circle in the array

    var r = sizeCirc / 2; //radius of circle

    translate(windowPad, windowPad) - r; //starting point of window

    for (var y = r; y < num * sizeCirc; y = y + sizeCirc) { //repeat circle row in the y direction
        for (var x = r; x < num * sizeCirc; x = x + sizeCirc) { //repeat circle in the x direction  
            for (var w = sizeCirc; w > 0; w = w - r) { //creates concentric circles and resets random radius 
                ellipse(x, y, w, w);
                r = random(2, 20);
                stroke(0, random(0, 255), random(0, 255), 50);
            }
        }
    }
}
