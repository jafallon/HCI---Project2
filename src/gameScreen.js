let img;
let capture;
function setup() {
  createCanvas(1425, 768);
  img = loadImage('images/brick-bg (1).jpg');
  cameraFunc();
  //capture = createCapture(VIDEO);
  //capture.size(320, 240);
}

function draw() {
  image(img, 0, 0, 1435, 768);

  image(capture, 285, 160, 280, 340);

  //menu boxes
  menuShape(40, 635, 1352, 100);
  menuShape(40, 635, 162, 100);
  menuShape(1230, 635, 162, 100);
  menuShape(748, 635, 482, 100);
  menuShape(202, 635, 467, 100);

  //all the box icons for player 1
  boxIcon(222, 647, 80, 80);
  boxIcon(392, 647, 80, 80);
  boxIcon(562, 647, 80, 80);

  //all the texts for the box icons for player 1
  icon('Rock', 240, 690, 20);
  icon('Paper', 407, 690, 20);
  icon('Scissors', 565, 690, 20);

  //health for Player 1
  icon('Health', 90, 660, 20);
  healthBar(60, 690, 120, 20);

  //all the box icons for player 2
  boxIcon(772, 647, 80, 80);
  boxIcon(942, 647, 80, 80);
  boxIcon(1126, 647, 80, 80);

  //all the texts for the box icons for player 2
  icon('Rock', 788, 690, 20);
  icon('Paper', 955, 690, 20);
  icon('Scissors', 1129, 690, 20);

  //health for Player 2
  icon('Health', 1280, 660, 20);
  healthBar(1252, 690, 120, 20);
}

function menuShape(a, b, c, d) {
  noFill();
  stroke('white');
  rect(a, b, c, d);
}

function boxIcon(a, b, c, d) {
  noFill();
  stroke('white');
  rect(a, b, c, d);
}

function icon(a, b, c, d) {
  fill('white');
  text(a, b, c);
  textSize(d);
}

function healthBar(a, b, c, d) {
  noFill();
  stroke('white');
  rect(a, b, c, d);
}

function cameraFunc() {
  capture = createCapture(VIDEO);
  capture.size(320, 240);
}
