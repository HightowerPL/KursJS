const obj = {
    name: "Marcin",
    surname : "Kowalski",
    age : 20
}

const {name: imie, surname: nazwisko, age: userAge} = obj;

console.log(imie);
console.log(nazwisko);
console.log(userAge);

//2
const tab = [1,2,3,4,5];

const [a,b,,c] = tab;
console.log(c);

//3
const id = 0;
users.forEach( user => {
    console.log(id);
    const {
        id = 'brak',
        name = 'brak',
        surname = 'brak',
        email = 'brak',
        gender = 'brak',
        img = 'brak',
        phone = 'brak'
    } = user;

    console.log(id, name, surname, email, gender, img, phone);
})
console.log(id);