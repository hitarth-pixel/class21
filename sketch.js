var fixedRect, movingRect , stndingRect, sittingRect, helpingRect,withouthelpingRect; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  standingRect=createSprite(100,100,50,50);
  standingRect.shapeColor="green"

  sittingRect=createSprite(200,100,50,50)
  sittingRect.shapeColor="red";
  
  helpingRect=createSprite(300,100,50,50)
  helpingRect.shapeColor="green"

  withouthelpingRect=createSprite(400,100,50,50)
  withouthelpingRect.shapeColor="green"
  
}

function draw(){
background("white");
sittingRect.x= mouseX;
sittingRect.y= mouseY;

if(abc(helpingRect,sittingRect)){
  helpingRect.shapeColor="pink";
  sittingRect.shapeColor="blue";
} else{

  helpingRect.shapeColor="green";
  sittingRect.shapeColor="red";
}
 drawSprites();
}

function abc (object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2 && 
  object2.x-object1.x<object2.width/2+object1.width/2 && 
  object1.y-object2.y<object2.height/2+object1.height/2 &&
  object2.y-object1.y<object2.height/2+object1.height/2 ){

    return true;


  } else{
     
       return false;
  }

}

