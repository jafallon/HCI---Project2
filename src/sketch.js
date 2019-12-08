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

let winIMG; // = loadImage("Path");
let loseIMG; // = loadImage("Path");
let drawIMG; // = loadImage("Path");

let CPUPick;
let UserPick;

let count = 5;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(1425, 768);
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
    return "😐" // tie
  }

  const victory = "🥳";
  const defeat = "😞";
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
    }
    classifyVideo();
  }
}




  


function draw() {
  background(60,60,60);

  // Draw the video
  image(video, 300, 160, 280, 340);

    //image(img, 0, 0, 800, 600);

  //image(camera, 300, 160, 280, 340);
  
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

  icon('Score='+score, 520, 60, 20);
  icon('CPU Score='+cpuscore, 515, 90, 20);
  fill(255);
  text("score = " + score, 500,50);
  
  textSize(75);
  // Pick an emoji
  let emoji = rpsEmoji(!finalResult ? label : userSelectedRPS);

  // Draw the emoji
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(128);
  text(emoji, 96, 128);

  // Draw the countdown, but only if it's started
  if (countdownStarted) {
    let secondEmoji = ""
    if (computerSelectedRPS == null) {
      secondEmoji = countdown
    } else {
      secondEmoji = rpsEmoji(computerSelectedRPS)

    }
    text(secondEmoji, 96, height / 2)
  }

  if (finalResult) {
    text(finalResult, 96, height - 96)
  }

  textSize(32);

  if (finalResult) {
    switch (finalResult) {
      case "🥳":
        label = "victory!";
        break;
      case "😞":
        label = "defeat";
        break;
      default:
        label = "tie";
    }
  }
  text(label, width / 2, height - 16);
  

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


function instruct(){
  alert("Welcome!\n 1. Place hand in front of the camera to make your move. \n 2. Camera predicts your move when the timer reaches to 0. \n 3.You compete against the computer. \n 4. 2 out of 3 wins");
}
