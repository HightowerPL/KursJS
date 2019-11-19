function MyObj() {
    this.pets = ["Pies", "Kot", "Świnka"];
}

MyObj.prototype.printNormal = function() {
    console.log(this);
    this.pets.forEach(function(el) {
        console.log(el);
    });
};

MyObj.prototype.printBig = function() {
    console.log(this);
    this.pets.forEach(el => {
        console.log(el.toUpperCase());
    });
};

MyObj.prototype.printSmall = function() {
    console.log(this);
    this.pets.forEach(function(el) {
        console.log(el.toLowerCase());
    });
};

MyObj.prototype.bindBtn = function() {
    console.log(this);
    document.querySelector('#button1').addEventListener("click", this.printBig.bind(this));
    document.querySelector('#button2').addEventListener("click", this.printSmall.bind(this));
    document.querySelector('#button3').addEventListener("click", this.printNormal.bind(this));
};

const ob1 = new MyObj();
ob1.bindBtn();

const module = document.querySelector('.module');
const p = module.querySelector('div p');
console.log(p);
