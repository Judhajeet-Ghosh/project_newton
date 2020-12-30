
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var rect1,rect2;
var ball1,ball2,ball3,ball4,ball5;
var c1,c2,c3,c4,c5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rect1 = createSprite(380,180,600,50)
	rect1.shapeColor = "grey"

	rect2 = createSprite(0,700,1600,30)
	rect2.shapeColor = "brown"

	ball1 = new Ball(100,200)
	
	ball2 = new Ball()
	ball3 = new Ball()
	ball4 = new Ball()

	c1 = new Thread(ball1.body,{x: 50, y: 60})






	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //engine.update()
  

	ball1.display()
	ball2.display()
	ball3.display()
	ball4.display()

	c1.display()
  drawSprites();
 
}



