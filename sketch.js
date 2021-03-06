const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,Ground;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(305,300,50,100);
    box2=new Box(340,400,50,50);

    Ground=new ground(800,780,1600,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
}