//poniższej linijki nie kasuj
document.querySelector('button').innerText = "Nowy tekst na przycisku";

//swoje skrypty pisz poniżej

const num = 5;
const str = "Ala ma kota, a kot ma downa";
const boo = true;
const obj = {};
const nul = null;

console.log(typeof num);
console.log(typeof str);
console.log(typeof boo);
console.log(typeof obj);
console.log(typeof nul);
console.log(typeof und);

const num1= "23";
const num2 = "43";

console.log(typeof num1);
console.log(parseInt(num1) + parseInt(num2));


let nr;
console.log(nr);

console.log("cat" === new String("cat"));

let arr1 = [1, 2, 3];
let arr2 = arr1.slice(); //kopiuje całą tablicę za pomocą metody slice()

arr1.splice(1,1,69);
console.log(arr1); //1, 2, 3, 4
console.log(arr2); //1, 2, 3


let x = 30;

function test() {
    //powinno się wypisać 30, ale mamy błąd,
    //ponieważ poniższa zmienna x została wyniesiona na początek zasięgu
    //ale nie możemy jej jeszcze użyć

    console.log(x);
    // let x = 20;
}

test();