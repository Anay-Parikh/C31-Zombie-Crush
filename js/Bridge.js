class Bridge {
  constructor(nlink, pointA) {
    this.nlink = nlink;
    this.image = loadImage("./assets/wood.png")
    this.body = Composites.stack(pointA.x, pointA.y, this.nlink, 1, 5, 5, function(
      x,
      y
    ) {
      return Bodies.rectangle(x, y, 50, 15, 10, {
        collisionFilter: { group: group }
      });
    });

    this.pointA = pointA;
    Composites.chain(this.body, 0.1, 0, -0.6, 0, {
      stiffness: 0.8,
      length: 10,
      render: { type: "line" }
    });

    Composite.add(world, this.body);

    Composite.add(world, [
      Constraint.create({
        pointA: this.pointA,
        bodyB: this.body.bodies[0],
        pointB: { x: 0, y: 0 },
        length: 10,
        stiffness: 0.1
      })
    ]);
  }

  break() {
    //Matter.Composite.clear(this.rope,true);
    this.body = null;
  }

  show() {
    if (this.body != null) {
      for (let i = 0; i < this.body.bodies.length - 1; i++) {
        var pos = this.body.bodies[i].position;
        //this.drawVertices(this.body.bodies[i].vertices);
        image(this.image, pos.x, pos.y, 100, 50);
      }
    }
  }

  drawVertices(vertices) {
    beginShape();
    fill("#FFF717");
    noStroke();

    for (let i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
  }

  showConstraints(constraints) {
    if (constraints != null) {
      for (let i = 0; i < constraints.length; i++) {
        this.drawConstraint(constraints[i]);
      }
    }
  }

  drawConstraint(constraint) {
    if (constraint != null) {
      const offsetA = constraint.pointA;
      let posA = { x: 0, y: 0 };
      if (constraint.bodyA) {
        posA = constraint.bodyA.position;
      }
      const offsetB = constraint.pointB;
      let posB = { x: 0, y: 0 };
      if (constraint.bodyB) {
        posB = constraint.bodyB.position;
      }
      push();
      strokeWeight(4);
      stroke(255);
      line(
        posA.x + offsetA.x,
        posA.y + offsetA.y,
        posB.x + offsetB.x,
        posB.y + offsetB.y
      );
      pop();
    }
  }
}
