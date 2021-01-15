var tom;
var jerry;
var garden;

function preload() {
    //load the images here
    tomImage1=loadImage("tomOne.png");
    tomImage2=loadImage("tomTwo.png");
    tomImage3=loadImage("tomThree.png");
    tomImage4=loadImage("tomFour.png");
    jerryImage1=loadImage("jerryOne.png");
    jerryImage2=loadImage("jerryTwo.png");
    jerryImage3=loadImage("jerryThree.png");
    jerryImage4=loadImage("jerryFour.png");
    gardenImage=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage("garden", gardenImage);
    tom=createSprite(200,200);
    tom.addImage("tom1", tomImage1);
    jerry=createSprite(800,200);
    jerry.addImage("jerry",jerryImage);



}

function draw() {

    background(191,239,255);
    //Write condition here to evalute if tom and jerry collide

    if(keyPressed()){
        tom.velocityX=3;
        tom.addImage("tom2", tomImage2);


    }
    if(tom.x=jerry.x<(tom.width=mouse.width)/2){
        tom.velocityX=0;
        tom.addImage("tom4",tomImage4);
  

    }

    drawSprites();
}


function keyPressed(){

    if(keyDown(leftArrow)){
        
        return true;


    }
    return false;



  //For moving and changing animation write code here


}
