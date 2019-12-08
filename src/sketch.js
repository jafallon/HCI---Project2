// The video
let video;
// For displaying the label
let label = "please wait...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/PMab4k9l/';
let userSelectedRPS;
let computerSelectedRPS = null;
let finalResult;
let rpsResult;
let countdown = 5;
let countdownStarted = false;

let countdownTimer;

let begin = true;
let uscore = 3;
let cscore =3;


let img;
let capture;
let camera;
let load = "Loading...";
let predict;
let model;
let timer = 10;
let tem;
var score= 0;
var cpuscore= 0;

let temscore =0;
let temcpuscore = 0;


let winIMG; // = loadImage("Path");
let loseIMG; // = loadImage("Path");
let drawIMG; // = loadImage("Path");

let CPUPick;
let UserPick;

let count = 5;

var Utemx = 120;
var Ctemx = 120;


var screen = 0;
var y=-20;
var x=200;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(1425, 768);
  img = loadImage('img.jpg');
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  classifyVideo();
  
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function rpsEmoji(label) {
  if (label == "rock") {
    score = "rock"
    
  } else if (label == "paper") {
    score = "paper"
  } else if (label == "scissors") {
    score = "scissors";
  } else {
    score = "";
  }

  return score
}

function determineRpsResult() {
  if (userSelectedRPS == computerSelectedRPS) {
    return "tie" // tie
  }

  const victory = "victory";
  const defeat = "loss";
  if (userSelectedRPS == "rock") {
    if (computerSelectedRPS == "scissors") {
      return victory;
    } else {
      return defeat;
    }
  } else if (userSelectedRPS == "paper") {
    if (computerSelectedRPS == "rock") {
      return victory;
    } else {
      return defeat;
    }
  } else if (userSelectedRPS == "scissors") {
    if (computerSelectedRPS == "paper") {
      return victory;
    } else {
      return defeat;
    }
  }
}

function decrementCountdown() {
  countdown--
  if (countdown == -1) {
    clearInterval(countdownTimer)
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }

  if (!countdownStarted) {
    // Start a countdown
    countdownStarted = true;
    countdownTimer = setInterval(decrementCountdown, 1000);
  }
  // Store the label and classify again!
  
  // finalResult = null;
  if (!finalResult) {
    label = results[0].label;

    // Record what the user selected if they got to a countdown of zero
    if (countdown == 0) {
      userSelectedRPS = label;

      // Generate a random value
      const rps = Math.random(getRandomInt(3))
      if (rps == 0) {
        computerSelectedRPS = "rock";
      } else if (rps == 1) {
        computerSelectedRPS = "paper";
      } else {
        computerSelectedRPS = "scissors";
      }
      

      finalResult = determineRpsResult();
      countdown = 5;
    }
    
    
    classifyVideo();
  }
}




  



function draw() {
    image(img, 0, 0, 1435, 768);

  if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }
}


function gameOn()
{
 // background(60,60,60);
  image(img, 0, 0, 1435, 768);

  // Draw the video
  image(video, 300, 160, 280, 340);

  
  boxIcon(510, 40, 135, 30);
  boxIcon(510, 70, 135, 30);
  
    
  
  button = createImg('https://i.imgur.com/j71bxyg.png');
  button.position(1330,50);
  //button.mousePressed(settings);
  
  instruction = createImg('https://i.imgur.com/KiYAJ1K.png');
  instruction.position(1300,50); document.getElementById("instruction").addEventListener("click",instruct);
  instruction.mousePressed(instruct);
  

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

  //health for User
  icon('Health', 90, 660, 20);
  fill('grey');
  rect(60, 690, 120, 20);
  UhealthBar(60, 690, 120, 20);
  
  
  

  //all the box icons for player 2
  boxIcon(772, 647, 80, 80);
  boxIcon(942, 647, 80, 80);
  boxIcon(1126, 647, 80, 80);

  //all the texts for the box icons for player 2
  icon('Rock', 788, 690, 20);
  icon('Paper', 955, 690, 20);
  icon('Scissors', 1129, 690, 20);

  //health for CPU
  icon('Health', 1280, 660, 20);
  fill('grey');
  rect(1252, 690, 120, 20);
  

  ChealthBar(1252, 690, 120, 20);

  icon('Score='+temcpuscore, 520, 60, 20);
  icon('CPU Score='+temscore, 515, 90, 20);
  fill(255);
  // text("score = " + score, 500,50);
  
  textSize(75);
  // Pick an emoji


  // Draw the emoji
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(128);
  
  //let i;
 // for(i = 0; i <1; i++){
    
    let emoji = rpsEmoji(!finalResult ? label : userSelectedRPS);
    text(emoji, 96, 128);
    

  // Draw the countdown, but only if it's started
    if (countdownStarted) {
      let secondEmoji = ""
      if (computerSelectedRPS == null) {
        
        
       // secondEmoji = countdown
      } else {
        secondEmoji = rpsEmoji(computerSelectedRPS)

      }
      text(countdown, 200, height / 2)
      // text(secondEmoji, 96, 40)
    }

    /*
    if (finalResult) {
      
    }
    */
    
    
    if (finalResult) {
      switch (finalResult) {
        case "victory":
          label = "victory!";
          Ctemx = Ctemx- 40;
          cscore = cscore -1;

          ChealthBar(60, 690, 80, 20);
          finalResult = null;
          break;
        case "loss":
          label = "loss";
          Utemx = Utemx-40;
          uscore = uscore -1;
          UhealthBar(60, 690, 80, 20);
          finalResult = null;
          
          break;
        case "tie":
          label = "tie";
        
         finalResult = null;
          break;
      }


  }
  
    
  
  

  textSize(32);
  text(label, width / 2, height - 16)
    
  if(uscore == 0|| cscore == 0){
    
    // End condition
    //begin = false;
    
    if(uscore == 0){
      // User wins
      temscore = temscore+1;
      uscore = 3;
      
    }
    if(cscore == 0){
      // User loses
      temcpuscore = temcpuscore+1;
      cscore =3;
      
    }
    
    
    
  }
  
    
  
  
  if(countdown == 0){
    
    emoji = rpsEmoji(!finalResult ? label : userSelectedRPS);
  }
  
  


}


function readScore(a, b){
  
  if( a == 0 ){
    UhealthBar(60, 690, 0, 20);
  }
  if( a == 1 ){
    UhealthBar(60, 690, 40, 20);
  }
  if( a == 2 ){
    UhealthBar(60, 690, 80, 20);
  }
  if( b == 2){
    ChealthBar(1252, 690, 80, 20);
  }
  if( b == 1){
    ChealthBar(1252, 690, 40, 20);
  }
  if(b == 0){
    ChealthBar(1252, 690, 0, 20);
  }
  else{
    // Continue game
  }

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

function UhealthBar(a, b, c, d) {
  fill('green');
  stroke('white');
  rect(a, b, c, d);
}

function ChealthBar(a, b, c, d) {
  fill('green');
  stroke('white');
  rect(a, b, c, d);
}


function instruct(){
  alert("Welcome!\n 1. Place hand in front of the camera to make your move. \n 2. Camera predicts your move when the timer reaches to 0. \n 3.You compete against the computer. \n 4. 2 out of 3 wins");
}




function startScreen(){
  startButton();
  questFunc();
  textSize(32);
  paperFunc();
  scissorsFunc();
  rockFunc();
  //713, 384 is center
  reset();
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

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
function mousePressed(){
	if(screen==0){
  	screen=1
  }
}
