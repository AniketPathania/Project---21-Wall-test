var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1297,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,40,20);
  wall = createSprite(1200 , 200 , thickness, height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

 if (hasCollided(bullet,wall)){
   bullet.velocityX = 0;

   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (damage>10 ){
   wall.shapeColor = color(255,0,0);
   fill("red")
   textSize(15);
   text("hit damage dealt = "  + damage,1140,350);
   textSize(30);
   text("Critical Damage",600,200);
   }

   if (damage < 10 ){
    wall.shapeColor = color(0,255,0);
    fill("green")
    textSize(15);
    text("hit damage dealt = " + damage,1140,350);
    textSize(30);
    text("Minimum Damage",600,200);
    }
 }

 
  

  drawSprites();
}


function hasCollided(lbullet,lwall){
  bulletrightEdge = lbullet.x + lbullet.width;
  wallleftEdge = lwall.x;

  if (bulletrightEdge>=wallleftEdge){
    return true;
  }
  return false;
}