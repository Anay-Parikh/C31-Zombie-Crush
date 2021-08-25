class Base {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.image = loadImage("./assets/wall.png");
        this.w = w;
        this.h = h;
        Composite.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        //translate(pos.x, pos.y);
        //fill("#ad6e3b")
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
        //rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}
