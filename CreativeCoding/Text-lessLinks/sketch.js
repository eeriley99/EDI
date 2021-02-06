//https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  textFont("Amatic SC");
  fill(255);
  textSize(32);
  changeCursor ();
}

function changeCursor() {
   if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
  cursor('https://eeriley99.github.io/code_sketchbook/icons-master/cans.png');
  text("Resume", mouseX, mouseY);
  }
  if (mouseY < innerHeight/2 && mouseX > innerWidth/2){ 
      cursor('https://eeriley99.github.io/code_sketchbook/icons-master/hand.png');
  text("Portfolio", mouseX, mouseY);
  }
if (mouseY > innerHeight/2){ 
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/feather.png');
  text("Writing", mouseX, mouseY);
  }

}

function mousePressed() {
  if (mouseY < innerHeight / 2 && mouseX < innerWidth / 2) {
  window.open("https://eeriley99.github.io/EDI/CreativeCoding/OM-E-Dv2/ResumeSample.html", target = "_blank");
  }

    if (mouseY < innerHeight/2 && mouseX > innerWidth/2){ 
    //range accounting for text length
    window.open("https://erinriley.weebly.com/",target = "_blank");
  }
  
      if (mouseY > innerHeight/2){ 
    //range accounting for text length
    window.open("http://www.artofdigitalfabrication.com/",target = "_blank");
  }
}