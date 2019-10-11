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