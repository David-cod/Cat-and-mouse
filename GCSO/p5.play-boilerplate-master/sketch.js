var car, wall, speed, weight;


function setup() {
  createCanvas(1600,400);
  car =createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1100,200,60,200);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
}

function draw() {
  background(0);  
  var deformation=0.5*weight*speed*speed/22500;
  if(wall.x-car.x<car.width/2+car.width/2){
    car.velocityX=0;

  

  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
   if(deformation>100 && deformation<180){
    car.shapeColor=color(230,230,0);
  }
   if(deformation>180){
    car.shapeColor=color(255,0,0);

  }

  }

  drawSprites();
}