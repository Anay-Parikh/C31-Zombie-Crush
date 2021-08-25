class Link {
    constructor(body, joint, xoffset) {
        var lastlink = body.body.bodies.length - 2;
        this.link = Constraint.create({
            bodyA: joint.body,
            pointA: {x: xoffset, y: 0},
            bodyB: body.body.bodies[lastlink],
            pointB: {x: 0, y: 0},
            length: 1,
            stiffness: 0.8 
        });

        Composite.add(world, this.link)
    }
    detach() {
        World.remove(world, this.link);
    }
}