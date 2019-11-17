//Zad 1
console.log('Zadanie 1 ----------');

const tab1 = [ 'Pies', 'Kot', 'Szrot', 'Miot', 'Wymiot', 'Trot'];
console.log(tab1.length);
console.log(tab1[0]);
console.log(tab1[5]);

//Zad 2
console.log('Zadanie 2 ----------');

for (let [index, value] of tab1.entries()) {
    console.log(`${index+1} elementem tablicy jest ${value} i ma on długość ${value.length}`);
}

{

    var name1 = 'Marcin';
    var name1 = 'Damian';
    console.log(name1);

    let name2 = 'Marcin';
    name2 = 'Damian';
    console.log(name2);

    const stala = 3.14;
     
    console.log(stala);
    
}

//Zad 3
console.log('Zadanie 3 ----------');
let tab3 = [ 'Pies', 'Kot', 'Szrot', 'Miot', 'Wymiot', 'Trot'];

tab3.push('Kmiot');
tab3.unshift('Albanczyk');

console.table(tab3);

//Zad 4
console.log('Zadanie 4 ----------');
let tab4 = [];
let num = Math.floor(Math.random(10-1+1)*10);

for (i=0; i < num; i++) {
    tab4.push(Math.floor(Math.random()*10));
}

console.table(tab4);

if ( tab4.length == 3) {
    console.log('Tablica ma długość 3 -> usuwam ostatni element')
    tab4.pop();
    console.log(tab4);
}

// Zad 5
console.log('Zadanie 5 ----------');
const tab5 = []
let min, max;
for (let i=0; i < 10; i++) {
    tab5.push(Math.floor(Math.random(20-10+1)*10));
}

min = tab5[0];
max = tab5[0];

for (let i = 0; i < tab5.length - 1; i++) {

    min > tab5[i] ? min = tab5[i] : void 0;
    max < tab5[i] ? max = tab5[i] : void 0;
}

console.table(tab5);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

//Zad 6
console.log('Zadanie 6 ---------');
const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
];
const numbers6 = [ 23, 545, 3123, 12, 1, 78, 99]

let sorted = names.sort(function(a,b) {
    return b.localeCompare(a);
});

let sortedNum = numbers6.sort(function(a,b) {
    return b - a;
});

console.log(sorted);
console.log(sortedNum);

//Zad 7
console.log('Zadanie 7 ---------');

const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]

let sortedTab7 = tab.sort( function(a,b) {
    return a.length - b.length
});

console.log(sortedTab7);

let all = 0;

sortedTab7.forEach(function(value) {
    all += value.length;
})

console.log(`Wszystkie wartości mają łączną długość ${all}`);

//Zad 8
console.log('Zadanie 8 ---------');

const files = [
    "zdjecie.jpg",
    "wakacje.jpg",
    "kolekcja.filmow.jpg",
    "mem.gif",
    "wpis.na.blog.txt",
    "auto.png",
    "archiwum.zip",
    "dokument.txt",
    "paczka.zip",
    "kwiatek.png"
]

files.sort((a,b) => {
    const aFile = a.substr(a.lastIndexOf('.'));
    const bFile = b.substr(b.lastIndexOf('.'));

    return aFile.localeCompare(bFile);
});

console.log(files)

//Zad 9
console.log('Zadanie 9 ---------');

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]

tabUsers.forEach(function(value) {
    value.age >= 18 ? console.log(value.name) : void 0;
});

tabUsers.filter(function(value) {
    value.age >= 18 ? console.log(value.name) : void 0;
})

//Zad 10
console.log('Zadanie 10 ---------')

function checkPalindrom(txt) {
    let reverse = '';
    
    for ( i = txt.length; i >= 0; i--) {
        reverse += txt.charAt(i).toUpperCase()
    }

    console.log(reverse);
    txt.toUpperCase() == reverse ? console.log('PALINDROM!') : console.log('Nope');
};

checkPalindrom('Devil lived');
checkPalindrom('Devil livd');

//Zad 11
console.log('Zadanie 11 ---------')

const txt = "Turlał goryl po Urlach kolorowe korale";

const splittedTxt = txt.split(' ');
let leng = 0;

splittedTxt.forEach( function(value) {
    leng += value.length;
})

console.log(`Całe zdanie składa się z ${leng} liter oraz ${splittedTxt.length} wyrazów`)

//Zad 12
console.log('Zadanie 12 ---------')

const tabela = [1,2,3, [4,5,6, [7, 8]], 9, 10];
let sum = 0;

function sumOfAll(tablica) {
    tablica.forEach(function(value) {
        typeof value == 'object' ? sumOfAll(value) : sum += value;
    })
};

sumOfAll(tabela);

console.log(sum);

//Zad 13
console.log('Zadanie 13 ---------')

function monthName(nr) {
    const msc = ['styczen', 'luty', 'marzec', 'kwiecien', 'maj', 'czerwiec', 'lipiec', 'sierpien', 'wrzesien', 'pazdziernik', 'listopad', 'grudzien'];
    msc[nr] === undefined ? console.log('Niepoprawna liczba') : console.log(msc[nr]);
}

monthName(43);
monthName(12);
monthName(1);


/////////// Zad rekrutacyjne


// let p;

// if (p) {
//     console.log(0)
// }

// p = 1;

// if (p) {
//     console.log(1)
// }

// p = '';

// if (p) {
//     console.log(2)
// }

// p = '0';

// if (p) {
//     console.log(3)
// }

// p = 0;

// if (p) {
//     console.log(4)
// }

// p = function() {};

// if (p) {
//     console.log(5)
// }


// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 0);

// console.log('3');

// const usersRaw = [
//     {
//         id: 11,
//         firstName: 'Ivan',
//         lastName: 'Ivanov',
//         email: 'i.ivanov@company1.com',
//         companyId: 1
//     },
//     {
//         id: 12,
//         firstName: 'Petr',
//         lastName: 'Sidorov',
//         email: 'p.sidorov@company2.com',
//         companyId: 2
//     },
//     {
//         id: 13,
//         firstName: 'Sergey',
//         lastName: 'Ivanov',
//         email: 's.ivanov@company2.com',
//         companyId: 2
//     },
//     {
//         id: 14,
//         firstName: 'Ivan',
//         lastName: 'Sidorov',
//         email: 'i.sidorov@company3.com',
//         companyId: 3
//     },
//     {
//         id: 15,
//         firstName: 'Petr',
//         lastName: 'Petrov',
//         email: 'p.petrov@company1.com',
//         companyId: 1
//     },
//     {
//         id: 16,
//         firstName: 'Petr1',
//         lastName: 'Petrov1',
//         email: 'p1.petro1v@company1.com',
//         companyId: 5
//     }
// ];

// const companiesRaw = [
//     {
//         id: 1,
//         type: 'SELLER',
//         name: 'Company1'
//     },
//     {
//         id: 2,
//         type: 'SELLER',
//         name: 'Company2'
//     },
//     {
//         id: 3,
//         type: 'BUYER',
//         name: 'Company3'
//     }
// ]

// function getUsersInfo(users, companies) {


//     return [];
// }

// console.log(getUsersInfo(usersRaw, companiesRaw));