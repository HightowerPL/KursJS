class Brick {
    constructor(x, y, width, height, type, live, graphic) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.live = live;
        this.graphic = graphic;

    }
    print() {
        console.log(`x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}, type: ${this.type}, live: ${this.live}, graphic: ${this.graphic}`);
    }
    init() {
        console.log('Dodano plansze');
    }
}

class BrickRed extends Brick {
    constructor(...param) {
        super(...param);
        this.graphic = 'red.png';
        this.live = 15
    }
}

const red = new BrickRed(2, 4,  10, 10, 'enemy');
red.init();
red.print();

class BrickBlue extends Brick {
    constructor(...param) {
        super(...param);
        this.graphic = 'blue.png';
        this.live = 10
    }
}

const blue = new BrickBlue(20, 14, 25, 25, 'enemy');
blue.print();

class BrickGreen extends Brick {
    constructor(...param) {
        super(...param);
        this.graphic = 'green.png';
        this.live = 20
    }
}

const green = new BrickGreen(50, 49, 130, 120, 'npc', 'fdasfsd',321312);
green.init();
green.print();


class BrickAnim extends Brick {
    constructor(...param) {
        super(...param);
        this.x = 99;
        this.speed = 10;
    }

    moveHorizontal() {
        console.log(`Poruszam się poziomo z szybkością ${this.speed}`);
    }
}

const anim = new BrickAnim(5, 5, 100, 100, 'anim', 50, 'anim.png');

anim.print();
anim.moveHorizontal()