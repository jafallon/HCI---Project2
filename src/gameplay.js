<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>



let timer = 5

class Main{
    // Constructor Class for initialized Variables
    constructor(){

        this.playing = false;
        this.currentMove = 0;
    }

}

function start(){



    initiate();



}

/*
function determineRes(){
    if()
}
*/

function initiate(){

    // Call homepage views ( Make sure the pages are in seperate .js files )

    // Call timer (5 secs delay)

    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
    if (timer == 0) {
        text("GAME OVER", width/2, height*0.7);
    }


}