
var bg ,bgimage;
var sam ,samimage;
var stoneimg ,coinimg ,jumpimg;
var ground;
var stonegroup, coingroup, padgroup;

function preload(){

bgimage=loadImage("bg.jpg");
samimage=loadImage("sam-removebg-preview.png");
stoneimg=loadImage("stone.png");
coinimg=loadImage("coinimg.png");
jumping=loadImage("jumping.png");

}

function setup(){

  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2,width+300,height+300);
  bg.addImage(bgimage);
  bg.scale=4;
  bg.velocityX = -3;

  sam = createSprite(width/6,height-130,50,50);
  sam.addImage(samimage);
  sam.scale=0.35;
  sam.setCollider('circle',0,0,170);
  

  ground = createSprite(width/2,height-60,width,10);
  
  stonegroup = new Group();
  coingroup = new Group();
  padgroup = new Group();

 
}
  
function draw(){
  console.log(frameCount)
  //sam.debug = true;
  background(0);

  if(bg.x < 600){
    bg.x = width/2
  }

  drawSprites();

  if(keyDown("space") && sam.y >= height-300 ){
     sam.velocityY = -10;
    
  }

  sam.velocityY = sam.velocityY +1;

  sam.collide(ground);

  coins();
  stone();
  pad();

  if(coingroup.isTouching(sam)){
    coingroup.destroyEach();
  }
  if(sam.isTouching(stonegroup)){
    sam.destory();
    coingroup.destroyEach();

  }

}

function coins(){
  
  if(frameCount % 100 === 0){
    
   var coin = createSprite(width+40,height-80,20,20);
   coin.addImage(coinimg);
   coin.velocityX = -(2+1*frameCount/500);
   coin.scale = 0.5;
   coingroup.add(coin);
   coin.lifetime = 500;
   
  }
  

}

function stone(){

  if(frameCount % 190 === 0){
  var stone = createSprite(width+40,height-80,20,20);
  stone.addImage(stoneimg);
  stone.velocityX = -(2+1*frameCount/500);
  stone.scale = 0.6;
  stonegroup.add(stone);
  stone.lifetime = 500;
  }

}

function pad(){

  if(frameCount % 430 === 0){
  var pad = createSprite(width+40,height-80,20,20);
  pad.addImage(stoneimg);
  pad.velocityX = -(2+1*frameCount/500);
  pad.scale = 0.6;
  padgroup.add(pad);
  pad.lifetime = 500;

  }

}