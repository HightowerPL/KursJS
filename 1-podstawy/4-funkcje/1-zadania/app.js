//Zad 1
console.log('// Zadanie 1');

function liczbaLiter(tekst) {
    console.log(`Liczba liter: ${tekst.length}`);
}

liczbaLiter('Ala ma kota, a kot ma ja w ...');

//Zad 2
console.log('// Zadanie 2');

function zsumator(tablica) {
    let suma = 0;
    tablica.forEach(function(value) {
        suma += value;
    })
    console.log(suma);

}

const tab = [1,2,3,4,69];

zsumator(tab);

//Zad 3
console.log('// Zadanie 3');

const txt = "Marcin";

function print(txt) {
    console.log(txt);
}

print();

//Zad 4 
console.log('// Zadanie 4');

function mixedLetters() {
    let msg = prompt('Wpisz dowolny tekst');
    let output = ""
    for (i=0; i < msg.length; i++) {
        i%2 == 0 ? output += msg.charAt(i).toUpperCase() : output += msg.charAt(i).toLowerCase();
    }

    console.log(output);
}
// mixedLetters();

//------
//Zad 5 
console.log('// Zadanie 5');
function zad5(atr1, atr2) {
    console.log(typeof atr1);   
    console.log(typeof atr2);   

    const numbersCheck = (typeof atr1 == "number") && (typeof atr2 == "number");
    console.log(numbersCheck);

    numbersCheck ? console.log(atr1*atr2) : console.log(false);
}

zad5(5,2);

//Zad 6
console.log('// Zadanie 6');

function rozdzielnik(txt, divider) {
    let tablica = txt.split(divider);
    let nowaTablica = [];
    console.log(tablica);

    nowaTablica = tablica.sort( (a,b) => {
        return a.localeCompare( b );
    })

    console.log(nowaTablica);
}

rozdzielnik('Ania|Marcin|Klemens|Eustachy|Zofia','|');


//Zad 7 
console.log('Zadanie 7');
let tab7 = [];

for (i = 0; i<10; i++) {
    let random = Math.floor(Math.random()*100);
    tab7.push(random);
}
console.log(tab7);

function minTabela(tabela) {
    let min;
    min = tabela[0];

    for (i = 1; i < 10; i++) {
        tabela[i] < min ? min = tabela[i] : void 0;
    }

    console.log(min);
}

minTabela(tab);

//Zad 8 
console.log('Zadanie 8');
const tab8 = ['Ania', 'Marcin', 'Bartek', 'Piotr'];

function uppercaseTab(arr) {
    let newTab = [];
    arr.forEach(function(el){
        newTab.push(el.toUpperCase());
    });
    console.log(newTab);
}

function mixedcaseTab(arr) {
    let newTab = [];

    arr.forEach(function(el){
        let newEl = '';

        for (i=0; i < el.length; i++) {
            i%2 ? newEl += el.charAt(i).toUpperCase() : newEl += el.charAt(i).toLowerCase();
        }
        newTab.push(newEl);
    });
    console.log(newTab);
}

uppercaseTab(tab8);
mixedcaseTab(tab8);

//Zad 9 
console.log('Zadanie 9');

(function(name, age) {
    console.log(`${name} ma ${age} lat`);
})('Jakub', 31);

//Zad 10 
console.log('Zadanie 10');

function showFile(fileName) {
    let counter = 0;

    return function(fileName) {
        counter++;
        console.log(`${counter} ${fileName}`);
    }
}

const c = showFile();

const d = showFile()

c("Aga.jpg");
c("Demi.png");
c('my.txt');

d('1.jpg');
d("D.png");