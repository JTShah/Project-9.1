var box;


function preload() {

}

function setup () {
  
  createCanvas(1000,700);
  box=createSprite(200,350,50,50);
  box.shapeColor="black";
}

function draw() {
  
  background("white");

  if(keyIsDown(RIGHT_ARROW)) {
      background("#c41b24");


  } 
  
  if(keyIsDown(LEFT_ARROW)) {
    background("#0B6A07");


}

if(keyIsDown(UP_ARROW)) {
  background("#0299eb");


}

if(keyIsDown(DOWN_ARROW)) {
  background("#fcc305");


}

  drawSprites();
}
