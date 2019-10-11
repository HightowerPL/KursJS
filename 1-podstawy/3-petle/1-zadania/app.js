//Zad 1
console.log('Zadanie 1 ----------------------');
let dot = '';

for (i = 0; i<6; i++) {
    dot += '*'

}
console.log(dot);

//Zad 2
console.log('Zadanie 2 ----------------------');
let num ='';
for (i = 1; i<11; i++) {
    num += i

}
console.log(num);

// Zad 3
console.log('Zadanie 3 ----------------------');
const txt = 'To jest jakiś tekst';

for (i = 0; i < 3; i++) {
    if (i == 1) {
        console.log(`║  ${txt}  ║`);
    } else if (i == 0) {
        console.log('╔═══════════════════════╗');
    } else {
        console.log('╚═══════════════════════╝');
    }
} 

//Zad 4
console.log('Zadanie 4 ----------------------');
let count = 0;
let nr;

for (i = 0; i < 10; i++) {
    nr = Math.floor(Math.random()*(10-1+1)*1);
    console.log(nr);
    nr > 5 ? count ++ : void 0;
}

count >= 5 ? console.log('Udało się') : console.log('Niestety nie tym razem');

//Zad 5
console.log('Zadanie 5 ----------------------');

const n = Math.floor(Math.random()*10);
const txt5 = "fifti fifti";

if ( n > 0) {
    for (i = 0; i <= n; i++) {
        console.log(txt5);
    }
} else {
    console.log('n jest liczbą ujemną');
}

//Zad 6 
console.log('Zadanie 6 ----------------------');
let txt6 = '';

for (i=0; i<8; i++) {
    txt6 += i;
    for (j= 0; j < i; j++) {
        txt6 += '-';
    }
}

console.log(txt6);