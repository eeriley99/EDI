function setup() {
  createCanvas(720, 720);
  noFill ();
  strokeWeight (12);
  stroke (255, 0, 0);//RGB red
}

function draw() {
  background(220, 220, 220);
  translate (60, 60);
  quad (0,0, 300,0, 300, 300, 0, 300);//sq 1
  quad (300,0, 600,0, 600, 300, 300, 300);//sq 2--move x to the right 300 pixels
  
  quad (0,300, 300,300, 300, 600, 0, 600);//sq 3--move y down 300 pixels
  quad (300,300, 600,300, 600, 600, 300, 600);//sq 4--move y down 300 pixels
}