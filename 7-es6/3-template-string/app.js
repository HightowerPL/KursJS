//1
const myPerson = {
    name: 'Jakub',
    height: 194,
    age: 32,
    print() {
        console.log(`Nazywam się ${this.name}
Mój wzrost to ${this.height}
Mam ${this.age} lat`);
    }
}

myPerson.print();

//2
const formatString = (parts, ...vars) => {
    console.log(parts);
    console.log(vars);
    let str = "";
    parts.forEach( (el, i) => {
        console.log(el, i);
        str += el;
        if (vars[i] !== undefined) {
            str += `<strong>${vars[i]}</strong>`;
        }
    })
    return str
}
const name = 'Michał';
const height = 165;
const age = 23;

const txt = formatString`${name} Nazywam się  i mam wzrostu ${height}
Mój wzrost to ${height}
Mam ${age} lat`;
console.log(txt); 