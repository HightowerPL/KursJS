let prod1 = {
    'name': "Tablet",
    'price' : 499,
    'weight' : 2
}

let prod2 = {
    'name': "Kosiarka",
    'price' : 1499,
    'weight' : 20
}

console.log(`Produkt numer jeden to: ${prod1.name}
    Produkt numer dwa to: ${prod2.name} 
    Razem kosztują: ${prod1.price + prod2.price}
    Razem ważą: ${prod1.weight + prod2.weight}
`)

const currentUser = {
    name: "Piotr",
    surname : "Nawałowicz",
    email : 'p.nawalowicz@duckduck.go',
    www : 'nawalnica.pl',
    userType : 'client',
    show: function() {
        console.log(`Imie: ${this.name}
        Nazwisko: ${this.surname}
        Mail: ${this.email}
        WWW: ${this.www}`)
    }
}

currentUser.show();

//Zad 3
const book = {
    title : 'Droga do krainy jednorożców',
    author : 'Bojack',
    pageCount : 299,
    publisher : 'Peanutbutter & Jelly',
    showDetails() {
        Object.keys(this).forEach(key => {
            typeof this[key] == 'function' ? void 0 : console.log(key, this[key])
        });

    }
}
 book.showDetails();
