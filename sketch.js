
var monk , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgrp, obsgrp
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);  
  
monk=createSprite(80,315,20,20);
monk.addAnimation("Moving", monkey_running);
monk.scale=0.1;

grd=createSprite(400,370,900,10);
grd.velocityX=-4;
grd.x=grd.width/2;
  
foodgrp=new Group();
obsgrp=new Group();
  
score=0


  

  
}


function draw() {
background(255);
  
if(grd.x<250){
  grd.x=grd.width/2;
} 
  
if(keyDown("space")){
monk.velocityY=-12;
}  
  
monk.velocityY=monk.velocityY+0.8;  
monk.collide(grd) 
  
  
spawnfood();  
spawnobstacles();  

if(obsgrp.isTouching(monk)){
  grd.velocityX=0;
  monk.velocityX=0;
  obsgrp.setVelocityXEach(0);
  foodgrp.setVelocityXEach(0);
  obsgrp.setLifetimeEach(-1)
  foodgrp.setLifetimeEach(-1)
 
}
  stroke("black"); 
  textSize(20); 
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()) ;
  text("Survival Time: "+ survivalTime, 100,50);
  
  stroke("white"); 
  textSize(20); 
  fill("white"); 
  text("Score: "+ score, 500,50);
  
  
  
drawSprites();
 
}

function spawnfood(){
  if(frameCount%80===0){
    food=createSprite(600,250,40,10);
    food.y=random(120,200);
    food.velocityX=-5;
    food.addImage(bananaImage);
    food.scale=0.05;
    food.lifetime=120;
    monk.depth=food.depth+1;
    foodgrp.add(food);
  }
}


function spawnobstacles(){
  if(frameCount%300===0){
    obs=createSprite(700,340,10,40);
    
    obs.velocityX=-4;
    obs.addImage(obstaceImage);
    obs.scale=0.15;
    obs.lifetime=200;
    obsgrp.add(obs);
  }
}




