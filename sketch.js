
var database;
var playerCount;
var gameState=0;

var player;
var form;
var game;

function setup(){

createCanvas(400,400)

database= firebase.database();
game=new Game();
game.getState();
game.start();

}
function draw(){

background(255)






}