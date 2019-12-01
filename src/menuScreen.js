//Title Screen

function setup() {
  createCanvas(1425, 768);
  img = loadImage('images/brick-bg (1).jpg');
}

function draw() {
  image(img, 0, 0, 1435, 768);

  startButton();
  questFunc();
  textSize(32);
  paperFunc();
  scissorsFunc();
  rockFunc();
  //713, 384 is center
}

function rockFunc() {
  //rock font title
  fill(255, 255, 255);
  rotate(-42 / 30.8);
  text('Rock', 420, 500);
}

function paperFunc() {
  fill(255, 255, 255);
  text('Paper', 713, 144);
}

function scissorsFunc() {
  //scissors font title
  rotate(PI / 4);
  text('Scissors', 680, -480);
}

function questFunc() {
  fill('red');
  textSize(64);
  text('Quest', 668, 264);
}

function startButton() {
  fill('red');
  stroke('red');
  ellipse(755, 490, 360, 100);
  fill('white');
  text('Press Start to Play', 625, 500);
}
