function Car(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

Car.prototype.printDetails = function() {
    console.log(`Nazwa: ${this.name}
    Marka: ${this.brand}
    Silnik: ${this.engine}
    Przebieg: ${this.mile}
    Wiek: ${this.age}`);
}

const car1 = new Car('Focus','Fiat', 'TDI', 12000, 10);
car1.printDetails();

//Zad 2

function Enemy(name, speed, attack, posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.move = function() {
    this.posX -= this.speed;
    console.log(`Jestem ${this.name}. Znajduję się na pozycji ${this.posX}`);
}

Enemy.prototype.attackEnemy = function() {
    console.log(`Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą ${this.attack}`);
}

Enemy.prototype.hit = function() {
    this.live -= 1;
    console.log(`Jestem ${this.name}. Mam teraz życia ${this.live}`);
}

const en1 = new Enemy('Tarkatan', 10, 20, 100);
const en2 = new Enemy('Earthrealmer', 5, 25, 50);

en1.move();
en1.move();
en1.move();
en1.attackEnemy();

en2.move();
en2.attackEnemy();
en2.hit();

//Zad 3

String.prototype.sortText = function() {
    let split = this.split('-')
                    .sort((a,b) => a.localeCompare(b))
                    .join(' ');
    console.log(split);
    return split;
}

const text = "Ala-nie-ma-już-kota,-bo-jej-zdechł";
text.sortText();

//Zad 4
String.prototype.reverse = function() {
    // let reverse = "";
    // for (i = this.length-1; i>=0; i--) {
    //     reverse += this.charAt(i);
    // }
    // console.log(reverse);
    let reverse = this.split('').reverse().join('');
    return reverse
}

"Ala ma downa".reverse();

//Zad 5
Array.prototype.sum = function() {
    let sum = 0;
    this.forEach(num => sum += num);
    return sum
}

Array.prototype.sortNr = function() {
    return this.sort((a,b) => a - b);
}

let arrgh = [1,2,33,12,23,543,123];

let all = arrgh.sum();
console.log(all);
console.log(arrgh);

let sorted = arrgh.sortNr();
console.log(sorted);
console.log(arrgh);
