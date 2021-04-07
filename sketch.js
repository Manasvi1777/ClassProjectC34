
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

box=[];
var ground;
var ball;
var rope;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width/2,height-200,width,20);

	for (var i=0;i<6;i++)
	{
		box[i]=new Box(width-500-500, 500, 200,200);
	}
	for (var i=6;i<12;i++)
	{
		box[i]=new Box(width-730-500, 500, 200,200);
	}
	for (var i=12;i<20;i++)
	{
		box[i]=new Box(width-960-500, 500, 200,200);
	}
	for (var i=20;i<26;i++)
	{
		box[i]=new Box(width-290-500, 500, 200,200);
	}

    ball = new Ball(1600,500,180,180);

	rope= new Rope(ball.body,{x:2400,y:100});

  Engine.run(engine);
}


function draw() {

  background(0);
 ground.display();

 for (var i=0;i<6;i++)
	{
		box[i].display();
	}
 for (var i=6;i<12;i++)
	{
		box[i].display();
	}
 for (var i=12;i<20;i++)
	{
		box[i].display();
	}
 for (var i=20;i<26;i++)
	{
		box[i].display();
	}

	ball.display()
	rope.display();
}
function mouseDragged() {
	
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
	
}


