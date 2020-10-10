
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	db = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,1200,20);
	paper = new Paper(100,500,30);
	dustbin = new Dustbin(765,515,30,110);
	dustbin2 = new Dustbin(935,515,30,110);
  dustbin3 = new Dustbin(850,575,200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  image(db,850,500,200,140);
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-225});
}
}



