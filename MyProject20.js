var garden, jerry1, jerry2, jerry3, jerry4, tom1, tom2, tom3, tom4;


function preload() {
    //load the images here
    garden=loadImage("images/garden.png");
    tom1=loadAnimation("images/tomOne.png");
    jerry1=loadAnimation("images/jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tom1);
    tom.scale=0.2;
    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerry1);
    jerry.scale=0.2;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
   
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
