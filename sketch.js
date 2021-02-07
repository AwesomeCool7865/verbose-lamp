const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonIMG;
var slingshot;

function preload(){
    polygonIMG= loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    block1 = new Box (360, 235, 30, 40);
    block2 = new Box (390, 235, 30, 40);
    block3 = new Box (420, 235, 30, 40);
    block4 = new Box (450, 235, 30, 40);
    block5 = new Box (480, 235, 30, 40);
    block6 = new Box (390, 195, 30, 40);
    block7 = new Box (420, 195, 30, 40);
    block8 = new Box (450, 195, 30, 40);
    block9 = new Box (420, 155, 30, 40);

    ground= new Ground (420, 260, 180, 5);

    
    //imageMode(CENTER);
    //image(polygonIMG, polygon.position.x, polygon.position.y, 40, 40)

    //slingshot= new Slingshot(this.polygon, {x:100, y:200})

}

function draw(){
    background('black');
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    ground.display();

    polygon.display()
}