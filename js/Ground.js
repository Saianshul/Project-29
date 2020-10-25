class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        var groundPos = this.body.position;
        push();
        translate(groundPos.x, groundPos.y);
        noStroke();
        fill(186, 66, 67);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}