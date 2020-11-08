
var gameState=0;
var playerCount,game;
var database,star,bg,form,player;
var playerArray,cyclistA,cyclistB;
var cyclists,playRef;
var starS;
var cyclist1;
var cyclist2;
var a = 3600;
var ext = ""
playerCount=0;
  function preload(){
    track =  loadImage("track.png");
    cyclistA = loadImage("cyclist1.png");
    cyclistB = loadImage("cyclist2.png");
     star = loadImage("star.png");
bg = loadImage("background.png");
  }
function setup(){
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
game=new Game();

game.getState();
game.start();


}
function draw(){
  background(100);
 /* if(player!==undefined){
    console.log(player.index);
   
  }*/
 
  image(bg,0,0,displayWidth,displayHeight);
  
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
  
    game.end();
  }
  console.log(player.rank);
 // console.log(playRef);
  if(gameState===0 && playRef!==undefined){
    fill("white");
    textSize(20);
    text(playRef+"/2",displayWidth/2-50,displayHeight/3);
    
    
   a = a+60;
   
   switch(a){
       case 3600 : ext = ".";
        break;
        case 7200 : ext = "..";
        break;
        case 10800 : ext = "...";
        break;
        default : break;
   }
   console.log(a);
   if(a>10800){
       a=0;
   }
   text("Please wait"+ext,displayWidth/2-50,displayHeight/3+30);
}
console.log(displayWidth);
}