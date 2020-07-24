var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var backgroundImg;
var wall1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG=loadImage("Capture.png")
}

function setup() {
	var canvas=createCanvas(800, 700);
	rectMode(CENTER);
	
	backgroundImg=createSprite(400,350,50,50);
	backgroundImg.addImage(backgroundIMG)
	backgroundImg.scale=4

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	wall1=new Wall(500,600,40,100);

	var package_options ={
		restitution:0.5,isStatic:true
    }

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // keyPressed();
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y	
	 
  
	//ellipse(packageBody.position.x,packageBody.position.y,20,20);
  wall1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false)
  }
}



