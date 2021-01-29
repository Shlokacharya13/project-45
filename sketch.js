var track,trackImg;
var player,playerImg;
var crewmates,crew1,crew2,crew3,crew4,crew5,crew6,crew7,crew8,crew9,crew10,crew11,crew12,deadBody;
var crewmatesGroup;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var restart_img,restart;
var gameOver,gameOver_img

function preload(){
  trackImg = loadImage("images/track.jpg");
  playerImg = loadImage("images/img1.png");
  crew1 = loadImage("images/img2.png");
  crew2 = loadImage("images/img3.png");
  crew3 = loadImage("images/img4.png");
  crew4 = loadImage("images/img5.png");
  crew5 = loadImage("images/img6.png");
  crew6 = loadImage("images/img7.png");
  crew7 = loadImage("images/img8.png");
  crew8 = loadImage("images/img9.png");
  crew9 = loadImage("images/img10.png");
  crew10 = loadImage("images/img11.png");
  crew11 = loadImage("images/img12.png");
  restart_img = loadImage("images/restartImg.png");
 gameOver_img = loadImage("images/gameOver_img.png");
}

function setup() {
  createCanvas(1200,1000);

  track = createSprite(600,500,1200,1200);
track.addImage(trackImg);
track.scale = 1.7;
track.velocityY = 5;

crewmatesGroup = new Group();

gameOver = createSprite(600,500,10,10);
gameOver.addImage(gameOver_img);
gameOver.scale = 1;

restart = createSprite(600,600,10,10);
restart.addImage(restart_img);
restart.scale = 0.2;

player = createSprite(600,900,10,10);
player.addImage(playerImg);
player.scale = 0.2;
//player.velocityX = 7;
//player.velocityX = -7;
}

function draw() {
  background(0);
 
if(gameState === PLAY){
  if(track.y > 600){
    track.y = track.y/2
      }
    
      if(keyDown("LEFT_ARROW")){
        player.velocityX = -4; 
        }
    
        if(keyDown("RIGHT_ARROW")){
          player.velocityX = 4; 
          } 


          crewmate();
          score = score + Math.round(getFrameRate()/60);
  if(player.isTouching(crewmatesGroup)){
    gameState = END

  }
}
else if(gameState === END){
  track.velocityY = 0;
  crewmatesGroup.setVelocityYEach(0);
  crewmatesGroup.setLifetimeEach(-1);
  player.velocityX = 0;
  
}

 



 
  drawSprites();

  fill("white");
  textSize(25);
  text("Score: " + score,950,50); 
 
}



function crewmate(){
  if(frameCount % 30 === 0){
crewmates = createSprite(600,-10,10,10);
crewmates.velocityY = 10;
crewmates.scale = 0.2;
crewmates.x = Math.round(random(300,900));

var rand = Math.round(random(1,11));
switch(rand){
  case 1 : crewmates.addImage(crew1)
  break;
  case 2 : crewmates.addImage(crew2)
  break;
  case 3 : crewmates.addImage(crew3)
  break;
  case 4 : crewmates.addImage(crew4)
  break;
  case 5 : crewmates.addImage(crew5)
  break;
  case 6 : crewmates.addImage(crew6)
  break;
  case 7 : crewmates.addImage(crew7)
  break;
  case 8 : crewmates.addImage(crew8)
  break;
  case 9 : crewmates.addImage(crew9)
  break;
  case 10 : crewmates.addImage(crew10)
  break;
  case 11 : crewmates.addImage(crew11)
  break;
  default:break
}
crewmates.lifetime = 100;
crewmatesGroup.add(crewmates);
  }
}