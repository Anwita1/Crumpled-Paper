
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	paper1 = new paper(50, 50, 50)

	dustbin1 = new dustbin(600, 480, 200, 20);
	dustbin2= new dustbin(500, 390, 20, 200);
	dustbin3 = new dustbin(700, 390, 20, 200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
	}
}

