var nouns = [
  "THE HUMAN",
  "THE FIRE",
  "THE BUTTERFLY",
  "THE OUTCAST",
  "THE SINNER",
  "THE OWL",
  "THE MINION",
  "THE CHICKEN",
  "ALEXANDRA",
  "THE CHEF",
  "THE MAGICIAN",
  "THE ROSE",
  "THE LIGHT"
];

var verbs = [
  "CRIES",
  "JUMPS",
  "SAUNTERS",
  "MAKES",
  "IGNORES",
  "PRANCES",
  "LAUGHS",
  "HIDES",
  "SINGS",
  "FLIES",
  "CELEBRATES",
  "DANCES",
  "RISES"
];

var prepositions = [
  "BY",
  "BELOW",
  "AROUND",
  "FOR",
  "BEHIND",
  "ABOVE",
  "TOWARDS",
  "OVER",
  "OUTSIDE",
  "UNDERNEATH"
];

let img = [];
let myFont = [];
let textColor = [];

function preload() {
    img [0] = loadImage('butterfly.jpg');
    img [1] = loadImage('peaceful-sea.jpg');
    img [2] = loadImage('man-on-mountain.jpg');
    img [3] = loadImage('plant-in-sidewalk.jpg');
    img [4] = loadImage('kitten_field_jump.jpg');
    img [5] = loadImage('rainbow-forest.jpg');
    img [6] = loadImage('clouds.jpg');
    img [7] = loadImage('bridge.jpg');
    img [8] = loadImage('balloons.jpg');
    img [9] = loadImage('relax-zen-stones.jpg');
  
    myFont [0] = loadFont('WaterBrush-Regular.ttf');
    myFont [1] = loadFont('BARK.ttf');
    myFont [2] = loadFont('Coco-Gothic-Heavy-trial.ttf');
    myFont [3] = loadFont('Scallywag-Regular.ttf');
    myFont [4] = loadFont('Coco-Gothic-Light-Italic-trial.ttf');
    myFont [5] = loadFont('Coco-Gothic-Ultralight-Italic-trial.ttf');
  
    textColor [0] = '#F44336';
    textColor [1] = '#FF9800';
    textColor [2] = '#FFEB3B';
    textColor [3] = '#8BC34A';
    textColor [4] = '#08C7B5';
    textColor [5] = '#03A9F4';
    textColor [6] = '#3F51B5';
    textColor [7] = '#9C27B0';
    textColor [8] = '#F746AE';
  
  
}

function setup() {
  createCanvas(500, 400);
  frameRate (0.125);
}

function draw() {
  var n1 = int(random(0, nouns.length));
  var v = int(random(0, verbs.length));
  var p = int(random(0, prepositions.length));
  var n2 = int(random(0, nouns.length));
  
  var i = int(random(0, img.length))
  image(img [i], 0, 0, width, height);
  
  var f = int(random(0, myFont.length))
  textFont(myFont[f]);
  
  var color = int(random(0, textColor.length))
  fill(textColor[color]);
  
  textSize(20);
  textWrap(WORD);
  
  // console.log
  text(nouns[n1] + " " + verbs[v] + " " + prepositions[p] + " " + nouns[n2] + ".", int(random(50, 300)), int(random(50, 250)), 200);
  
}
