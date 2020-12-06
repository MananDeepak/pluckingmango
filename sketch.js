
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var mango1;
var stone;
var tree;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var boy;
var chain1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height-10,1200,20);

    
	stone=new Stone(50,550,50,50);
	mango1=new Mango(760,380,20);
	mango2=new Mango(750,300,25);
	mango3=new Mango(600,250,20);
	mango4=new Mango(680,350,25);
	mango5=new Mango(690,280,30);
	mango6=new Mango(620,300,20);
	mango7=new Mango(700,400,20);
	mango8=new Mango(590,380,30);

	tree=new Tree(650,height-270,300,550)

	boy=new Boy(160,height-80,80,300)
	chain1=new Chain(stone.body,{x:135,y:550});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  ground.display();
  boy.display();
  
  
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  chain1.display();
 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


  function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(stone.body);  
  }    
  }

  function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<-lmango.r+lstone){
 Matter.Body.setStatic(lmango.body,false)  
 }
}










