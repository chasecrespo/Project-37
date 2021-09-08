var canvas, backgroundImage;

var gameState=0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);
  //database= firebase.database();
  //quiz.getState();

}


function draw(){
  background("pink");
if(gameState===1){
  clearInterval();
  quiz.play();
}
  
}
