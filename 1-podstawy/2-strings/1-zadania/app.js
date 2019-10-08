const text = "Ala ma kota";

console.log(text);
console.log(text.length);

const text2 = "Koty i psy to fajne zwierzaki";
let count = 0;
for (i=0; i < text2.length; i++) {
    text2.charAt(i) == ' ' ? count++ : void 0;
}

console.log(count);

const name = "piotrek";

console.log(name.charAt(0).toUpperCase() + name.substr(1));

// text.includes('kot') ? alert("Ma kotecka") : alert('Ni ma kotecka');

const textC = 'Uczę się stringów w C++';

console.log(textC.replace('C++', "Javascript"));
console.log(textC.slice(0, textC.indexOf('C++')) + "Javascript");

const textJS = textC.replace('C++', "Javascript");
const page = textJS.replace(/[ę,ó, ]/g, function(match){
    switch (match) {
        case 'ą' :
            return 'a';
        case 'ę' : 
            return 'e'
        case 'ó' : 
            return 'o'
        case ' ' : 
            return '_'

    }
})
let url = "http://mojastrona.pl" + "?text=" + page;
console.log('---------------------------------------');
console.log(url);

console.log('---------------------------------------');
console.log(text.toLowerCase);
console.log(text.toUpperCase);
let mount ="";
for (i = 0; i< text.length; i++) {
    i%2 == 0 ? mount += text.charAt(i).toLowerCase() : mount += text.charAt(i).toUpperCase();
}
console.log(mount);

console.log(text.replace('Ala', 'Ola'));
