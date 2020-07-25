var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var runners,runner1,runner2,runner3,runner4
var runner,hurdle

function preload(){
   track=loadImage("images/track.png")
   backgroundImg=loadImage("images/background.jpg")
   runner=loadImage("images/runner.png")
   hurdle=loadImage("images/hurdle.png")
 
}
function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    }
    if(gameState === 2){
game.end();
    }   
}
