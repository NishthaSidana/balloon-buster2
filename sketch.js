var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0
var gamestate="play"
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png")
  pink_balloonImage=loadImage("pink_balloon0.png")
  redGroup=createGroup()
  blueGroup=createGroup()
  greenGroup=createGroup()
  pinkGroup=createGroup()
  arrowGroup=createGroup()
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  scene = createSprite(800,600,500,100);
  scene.addImage(backgroundImage);
  scene.scale =4
  
  // creating bow to shoot arrow
  bow = createSprite(1500,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
  scene.velocityX = -3 

    if (scene.x < 750){
      scene.x = 800;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch (select_balloon){
      case 1: redBalloon()
      break;
      case 2:blueBalloon()
      break;
      case 3:greenBalloon()
      break;
      case 4:pinkBalloon()
      break;
    }

  }
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach()
    score=score+1
  }
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach()
    score=score+1
  }
  if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach()
    score=score+1
  }
  if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach()
    score=score+1
  }
  drawSprites();
  text("score="+score,width-200,300)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = bow.x;
  arrow.y=bow.y;
  arrow.velocityX = -20;
  arrow.lifetime = 500;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 250;
  red.scale = 0.1;
  redGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 6;
  blue.lifetime = 250;
  blue.scale = 0.1;
  blueGroup.add(blue)
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 6;
  green.lifetime = 250;
  green.scale = 0.1;
  greenGroup.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 250;
  pink.scale = 1;
  pinkGroup.add(pink)
}
