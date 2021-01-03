function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
    fill('#F8EDEB');
    background('#EFEA5A');
}

function draw() {

    var num = 20; //variable for the number of squares in the array

    var sideLen = windowWidth / num; //variable for the side length of each square

    for (var y = 0; y < displayWidth; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < displayWidth; x = x + sideLen) { // loop to create a row of squares in the x direction

            var Colors = [color('#FEC5BB'), color('#FCD5CE'), color('#FAE1DD'), color('#F8EDEB'), color('#F8EDEB'), color('#D8E2DC'), color('#D8E2DC'), color('#FFE5D9'), color('#FFE5D9')];


            var r = floor(random(4));

            switch (r) {
                case 0:
                    beginShape();
                    vertex(x + 20, y + 20);
                    vertex(x + 40, y + 20);
                    vertex(x + 40, y + 40);
                    vertex(x + 60, y + 40);
                    vertex(x + 60, y + 60);
                    vertex(x + 20, y + 60);
                    endShape(CLOSE);
                    break;
                case 1:
                    beginShape();
                    vertex(x + 20, y + 20);
                    vertex(x + 60, y + 20);
                    vertex(x + 60, y + 40);
                    vertex(x + 40, y + 40);
                    vertex(x + 40, y + 60);
                    vertex(x + 20, y + 60);
                    endShape(CLOSE);
                    break;
                case 2:
                    beginShape();
                    vertex(x + 20, y + 20);
                    vertex(x + 60, y + 20);
                    vertex(x + 60, y + 60);
                    vertex(x + 40, y + 60);
                    vertex(x + 40, y + 40);
                    vertex(x + 20, y + 40);
                    endShape(CLOSE);
                    break;
                case 3:
                    beginShape();
                    vertex(x + 40, y + 20);
                    vertex(x + 60, y + 20);
                    vertex(x + 60, y + 60);
                    vertex(x + 20, y + 60);
                    vertex(x + 20, y + 40);
                    vertex(x + 40, y + 40);
                    endShape(CLOSE);
                    break;
            }
            fill(Colors[int(random(0, Colors.length))]);
        }
    }
    noLoop();
}
