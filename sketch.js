//Create variables here
var dog,dogIMG,happydog,database,foodS,foodStock;

function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png")
  dogIMG2 = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogIMG);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)

if(keyCode === UP_ARROW){
  writeStock(foodS);
  dog.addImage(dogIMG2);
}


  drawSprites();
  //add styles here
  textSize(35)
  stroke("red")
  fill("green")
  text(foodStock,250,150)  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<=0){
  x = 0
}else{
  x = x - 1;
}

  database.ref('/').update({
    Food: x
  })
}


