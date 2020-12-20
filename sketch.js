
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground1=new Ground(400,500,800,10);
    World.add(world,ground1);

	
	
     
	//Create the Bodies Here.
	ball=new Paper(100,480,30);
	b1=new Base(550,489,80,10);
	b2=new Base(502,469,10,50);
	b3=new Base (599,469,10,50)

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background(0);
  ground1.display();
  ball.display();
 b1.display();
 b2.display();
 b3.display();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:250})
}
}
