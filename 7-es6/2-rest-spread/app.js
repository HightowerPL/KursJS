

function randomTable(lng = 5, min = 0, max = 10) {
    const tab = [];
    for (let i=0; i<lng; i++) {
        tab.push(Math.abs(Math.floor(Math.random()*(max-min+1)+min)));
    }
    return tab;
}

const tab1 = randomTable(3,5,9);
const tab2 = randomTable();

console.log(tab1, tab2);

const tab3 = [...tab1, ...tab2];

console.log(tab3);
console.log(`Największą liczba w tej tablicy jest: ${Math.max(...tab3)}`);
console.log(`Najmniejszą liczba w tej tablicy jest: ${Math.min(...tab3)}`);
 const tab4 = tab3.map(el => el + 10);
 console.log(tab4);
///Zad2
console.log('//Zad2');

function printBig(...slowa) {
    let newTab = slowa.map(el => el.toUpperCase());
    console.log(newTab.join(' '));

}

printBig("Jax", "SubZero", "Scorpion", "Kitana");

//Zad3
console.log('//Zad3');

function avg(...params) {
    const avg = params.reduce(function(a,b) { return a + b })/params.length;

    console.log(`${[...params]} średnia z liczb znajdujących się w tablicy wynosi: ${avg}`);
}

avg(1,2,3);
avg(30,50,70);
avg(31,521,7);

//Zad4
function first(...params) {
    console.log(`Witam serdecznie`);
    second(...params)
}

function second(...params) {
    params.forEach(el => console.log(el));
}
first(123,432,5425,432,4321,12);
// second(1,43,63,64,5342);

function test() {
    //console.log(mk11);

    let mk11;

    console.log(mk11);
    console.log(typeof mk11);
    console.log(undefined);

}

test();

function counter() {
    let a = 0;

    return function() {
        a++;
        console.log(a);
    }
}

const c = counter();
c(); //1
c(); //2
c(); //3
c(); //4
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();