class Stone {
    constructor() {
        var options = {
            restitution: 0.8
        }
        this.image = loadImage("./assets/stone.png");
        this.body = Bodies.circle(random(350, width-350), random(50, 200), random(25, 50), options);
        console.log(this.body)
        Composite.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        ellipseMode(CENTER);
        imageMode(CENTER);
        noStroke();
        //fill("white");
        image(this.image, pos.x, pos.y, this.body.circleRadius*2, this.body.circleRadius*2)
        //ellipse(pos.x, pos.y, this.body.circleRadius*2);
        pop();
    }
}