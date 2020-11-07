var fixedRect, movingRect;
var obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 3;
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  obj1 = createSprite(100, 100, 40, 20);
  obj1.shapeColor = "white";

  obj2 = createSprite(200, 100, 40, 20);
  obj2.shapeColor = "pink";

  obj3 = createSprite(300, 100, 40, 20);
  obj3.shapeColor = "cyan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounce(movingRect,fixedRect);
  if(isTouching(obj1, movingRect)){
    obj1.shapeColor = "red";
    movingRect.shapeColor = "red";
    console.log ("obj1")
  }
  else if (isTouching(obj2, movingRect)){
    obj2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if (isTouching(obj3,movingRect)){
   obj3.shapeColor = "red";
   movingRect.shapeColor= "red"
 console.log ("is")
  }

  
  else{
    movingRect.shapeColor = "green";
    obj1.shapeColor = "white";
    obj2.shapeColor = "pink";
    obj3.shapeColor = "cyan";
  }
  drawSprites();
}


