// const obj = {
//     time: 1000,
//     pets: ['kot', 'orangutan', 'kojot', 'żmija', 'surykatka', 'goryl'],
//     print: function() {
//         console.log(this.pets);
//         setTimeout(function() {
//             this.pets.forEach(function(value) {
//                 console.log(value.toUpperCase());
//             })
//         }.bind(this), this.time)
//     }
// }

// obj.print();

// const ob = {
//     name : "Kwiatek",

//     init() {
//         console.log(this);

//         console.log("Nazywam się " + this.name);

//         function showText() {
//             console.log(this)
//             console.log("Nazywam się " + this.name);
//         }

//         showText();
//     }
// }

// ob.init();

const freeza = {
    name : "Freeza",
    power : 86000000,
    print() {
        console.log(`
            Dane na temat bohatera:
            Nazwa: ${this.name}
            Moc: ${this.power}
        `);
    }
}

const goku = {
    name : "Goku",
    power : 100000000
}

const print2 = freeza.print.bind(goku);


// freeza.print.call(goku);
print2();