class Brick {
    constructor(x,y,graphic, width, height, type, live) {
        this.x = x;
        this.y = y;
        this.graphic = graphic;
        this.width = width;
        this.height = height;
        this.type = type;
        this.live = live;
    }
    print() {
        console.log(this.x, this.y, this.graphic, this.width, this.height, this.live, this.type);
    }
    init() {
        console.log('Dodano plansze');
    }
}

class BrickRed extends Brick {
    constructor(x,y,width, height, type) {
        super(x,y,width, height, type);
        this.graphic = 'red.png';
        this.live = 15
    }
}

class BrickBlue extends Brick {
    constructor(x,y,width, height, type) {
        super(x,y,width, height, type);
        this.graphic = 'blue.png';
        this.live = 10
    }
}

class BrickGreen extends Brick {
    constructor(x,y,width, height, type) {
        super(x,y,width, height, type);
        this.graphic = 'green.png';
        this.live = 20
    }
}

const red = new BrickRed(2, 4, 10, 10, 'enemy');
console.log(red.init());
console.log(red.print());

class BrickAnim extends Brick {
    constructor(y, width, height, type, live) {
        super(y, width, height, type, live);
        this.x = 99;
        this.speed = 10;
    }

    moveHorizontal() {
        console.log(`Poruszam się poziomo z szybkością ${this.speed}`);
    }
}

const anim = new BrickAnim(5, 5, '',100, 100, 'anim', 50, 10);

anim.print();
anim.moveHorizontal()