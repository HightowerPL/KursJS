//zmiennych colors i tab w tym zadaniu nie zmieniaj
const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF']
const tab = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,3,3,3,3,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,2,2,2,1,1,2,1,0,0,0,0],[0,0,2,1,2,1,1,1,2,1,1,1,0,0],[0,0,2,1,2,2,1,1,1,2,1,1,1,0],[0,0,2,2,1,1,1,1,2,2,2,2,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,3,3,4,3,3,3,0,0,0,0,0],[0,0,3,3,3,4,3,3,4,3,3,3,0,0],[0,3,3,3,3,4,4,4,4,3,3,3,3,0],[0,1,1,3,4,1,4,4,1,4,3,1,1,0],[0,1,1,1,4,4,4,4,4,4,1,1,1,0],[0,1,1,4,4,4,4,4,4,4,4,1,1,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0],[0,0,2,2,2,0,0,0,0,2,2,2,0,0],[0,2,2,2,2,0,0,0,0,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

//-----------------------------------------
//START
//-----------------------------------------
let text = '';
//tutaj zrób zadanie za pomocą pętli





//tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
document.querySelector('.canvas').innerHTML = text;



////// CreativeSTYLE

let ob = {
    name: 'Marcin',
    pet: {
        name: "Rudolf"
    }
}

let ob2 = Object.assign({}, ob);

console.log(ob2.pet.name);

ob.pet.name="Piotr";

console.log(ob.pet.name);
console.log(ob2.pet.name);
