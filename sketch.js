
function preload(){
shipimages = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');
seaimg = loadImage('sea.png');

}

function setup(){  
createCanvas(400,400)
 sea=createSprite(200,200)
 sea.scale = 0.5
 sea.addImage(seaimg)
 ship= createSprite(200,200)
 ship.scale = 0.3
 ship.addAnimation('moving',shipimages)
}

function draw() {
background("blue")
 
sea.velocityX= -4
if(sea.x<0){
  sea.x= sea.width/2;

}
drawSprites()
}