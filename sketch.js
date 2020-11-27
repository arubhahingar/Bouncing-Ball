//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = Bodies.rectangle(400, 390, 800, 20, {isStatic : true});
  console.log(ground); //JSON - Java Script Object Notation

  console.log(ground.position.x);
  console.log(ground.position.y);

  World.add(myWorld, ground);

  ball = Bodies.circle(400,100,30, {restitution:1.5});
  World.add(myWorld,ball);
}

function draw() {
  background("cornflowerblue");  

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
}