class Polygon{
    constructor(){
    
    this.body = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    this.image= "polygon.png"
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}