//Create variables here
var dog,happyDog;
var database;
var foods,foodStock;
var food;

function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  happyImg=loadImage("happydog.png")
  
}

function setup() {
  database=firebase.database();
  createCanvas(1100, 800);
  
  dog=createSprite(500,300,10,10);
  dog.addImage("standing",dogImg);

  dog.scale=0.5;

    foodStock=database.ref('Food');
    foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

  if(keyWentDown(UP_ARROW)){
       feedPet();
    
  }
  drawSprites();
  //add styles here
textSize(23);
fill("white");
stroke("green");
//text("Note:Press UP_ARROW Key To Feed Drago Milk",500,100);
}
 
function readStock(data){
  foods=data.val();
}

function writeStock(data){

 foodStock.set(data)
}
function feedPet(){
  if(foods>0){
    writeStock(foods-1);
    
  }
  else{
    dog.addImage(dogImg);
  }
}
function feedDog(){
  dog.addImage("happy",happyImg);

  foodObj.updateFoodstock(foodObj.getFoodstock()-1);
  database.ref('/').update({
    food:foodObj.getFoodstock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foods++;
  database.ref('/').update({
    food:foods
  })
}