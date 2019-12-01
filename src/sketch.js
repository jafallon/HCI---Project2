let img;
let capture;
let camera;
let load = "Loading...";
let predict;
let model;
let tem;

let winIMG; // = loadImage("Path");
let loseIMG; // = loadImage("Path");
let drawIMG; // = loadImage("Path");

let CPUPick;
let UserPick;

let count = 5;

function preload(){
  predict = ml5.imageClassifier(model.json);

}


function setup() {
  createCanvas(1425, 768);
  img = loadImage('images/brick-bg (1).jpg');
  camera = createCapture(VIDEO);
  camera.hide();
  //camera = createCapture(VIDEO);
  //camera.size(320, 240);

  predictVideo();

}

function predictVideo(){
  predict.classify(camera, prediction)
}

function derRPSRes(){
}

function determineRPS(){

  // Game logic

  // User Rock
  if(UserPick == "rock"){
    if(CPUPick == "scissors"){
      return win;
    }
    if(CPUPick == "paper"){
      return lose;
    }
    else{
      return draw;
    }
  }
  
  // User Scissors
  if(UserPick == "scissors"){
    if(CPUPick == "paper"){
      return win;
    }
    if(CPUPick == "rock"){
      return lose;
    }
    else{
      return draw;
    }
  }

  // User Paper
  if(UserPick == "paper"){
    if(CPUPick == "rock"){
      return win;
    }
    if(CPUPick == "scissors"){
      return lose;
    }
    else{
      return draw;
    }
  }
}


function prediction(results){
  // Countdown here

  if(!finalRes){
    label = results[0].label;
  }

  count = 0;  // Temp
  
  if(count == 0){

    UserPick = label;
    

    tem = determineRPS();

  }
  predictVideo();
}


function draw() {
  image(img, 0, 0, 1235, 768);

  image(camera, 300, 160, 280, 340);

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


function timer(){
  // Take an input as a parameter 



}

