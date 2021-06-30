var backgroundImg;
var iss, spaceCraft, hasDocked;
hasDocked = false
var issImage;
var spaceCraftImageLeft, spaceCraftImageRight, spaceCraftImage, spaceCraftNormal;

function preload() {
backgroundImg = loadImage("spacebg.jpg");
issImage = loadImage("iss.png");

spaceCraftImageLeft = loadAnimation( "spacecraft3.png");
spaceCraftImageRight = loadAnimation( "spacecraft4.png");

spaceCraftImage = loadAnimation("spacecraft1.png", "spacecraft2.png");
spaceCraftNormal = loadAnimation("spacecraft1.png");
}

function setup() {
createCanvas(800,400);
   iss = createSprite(350,150,20,20);
   iss.addImage("iss", issImage);
   iss.scale = 0.50;

 spaceCraft = createSprite(600, 300, 20,20);
 spaceCraft.addAnimation("Normal", spaceCraftNormal );
 spaceCraft.addAnimation("LEFT", spaceCraftImageLeft);
 spaceCraft.addAnimation("RIGHT", spaceCraftImageRight);
  spaceCraft.addAnimation("docking", spaceCraftImage);
 spaceCraft.scale = 0.15

  
}

function draw() {
  background(backgroundImg); 
text(mouseX+ "   "+ mouseY, mouseX, mouseY);
 if(!hasDocked){

  spaceCraft.changeAnimation("Normal", spaceCraftNormal )
if(keyDown("UP_ARROW")){
spaceCraft.y-= 3;
spaceCraft.changeAnimation("Normal", spaceCraftNormal)
}

if(keyDown("DOWN_ARROW")){
  
  spaceCraft.changeAnimation("docking", spaceCraftImage)
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.x-= 3;
    spaceCraft.changeAnimation("LEFT", spaceCraftImageLeft)
    }


  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x+= 3;
    spaceCraft.changeAnimation("RIGHT", spaceCraftImageRight)
    }
if(spaceCraft.x>310 && spaceCraft.x<330 && spaceCraft.y>150 && spaceCraft.y<170) {

hasDocked = true

}
if(hasDocked == true){

textSize(40);
text("Has Docked", 400, 200);


}
  drawSprites();
}}