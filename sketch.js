var castle;
var castleImg; var rapunzal;
var invisbleboundary;var gift;
var giftImg; var gift2;var gift2Img;var score=0;
//Game States
var START=1;
var PLAY=2;
var END=0;
var gameState=1;

function preload(){

 rapunzalImg = loadImage("rapunzal.png");
  skyImg = loadImage("sky.jpg");
  rapunzal2Img = loadImage("rapunzal.png");
  ropeImg = loadImage("rope.jpg");
  giftImg = loadImage("gift.png");
  gift2Img = loadImage("gift2.png");
}
function setup(){
createCanvas(1000,800);

sky = createSprite(400,400);
sky.addImage(skyImg);
sky.scale =4.5;
sky.velocityY=3;

rapunzal = createSprite(100,700,20,20);
rapunzal.addImage(rapunzalImg);
rapunzal.scale = 0.7;


rapunzal2 = createSprite(900,700,20,20);
rapunzal2.addImage(rapunzal2Img);
rapunzal2.scale = 0.7;
rapunzal2.velocityX=1;


invisbleboundary = createSprite(450,400,10,800);
invisbleboundary.visible =false;

score =0;
}

function draw() {
  background("lightblue");
    
rapunzal.x = World.mouseX;
rapunzal.collide(invisbleboundary);

if(rapunzal.velocityX=-2){
  score=score+6
}


if(sky.y>400){
  sky.y = sky.height/2;
}
      drawSprites();
      textSize(20);
      fill(255);
      text("Score "+ score,150,30);
      if(gameState===START){
        fill("maroon");
        textSize(10);
        text("Press Space key",450,10);

       }
       if(keyDown("space")){

         gameState===PLAY

         rope = createSprite(150,400,20,20);
        rope.addImage(ropeImg);
        rope.scale =2;

        rope = createSprite(950,400,20,20);
        rope.addImage(ropeImg);
        rope.scale =2;

   
       
      }
      if(rapunzal.isTouching(rapunzal2)){
        gameState===END
        score=0;
        rapunzal2.velocityX=0;
    
        sky.velocityY=0;

        textSize(50);
        fill(255);
        text("Game Over!",350,300);
      fill(yellow);
      }
    }

 
