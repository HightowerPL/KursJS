// import Axios from "axios";

/*
Do wykonania tego zadania potrzebujesz mieć dobrze zainstalowany Node.js oraz umieć
instalować paczki.
-------------

W pliku data/data.json znajduje się tablica z państwami.
Zainstaluj na swoim komputerze json-server, a następnie odpal w tym katalogu poleceniem:

json-server --watch data/data.json

Następnie za pomocą ajaxa połącz się na adres który wygeneruje ci odpalony serwer i operując na zwróconych danych wykonaj poniższe polecenia:

1. Wypisz wszystkie nazwy państw (a jak juz wypiszesz to zakomentuj, bo tego jest zbyt dużo)
2. Wypisz ile jest ludności we wszystkich państwach
3. Wypisz średnią ludność w państwach
4. Wypisz ile jest państw, które mają dodatni wzrost
5. Wypisz ile jest państw, które mają ujemny wzrost
6. Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
7. Napisz ile wynosi średnia dzietności na świecie (fertility_rate)
    (uwaga - niektóre kraje nie mają danych - wtedy jest null)
8. Napisz ile wynosi średnia wieku na świecie
9. Wypisz wszystkie dane na temat Polski
11. Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?

*/

axios.get('http://localhost:3000/countries')
    .then( resp => {
        console.log(resp);

        //1.
        console.groupCollapsed("Nazwy państw");
        resp.data.forEach(country => {
            console.log(country.name);
        })
        console.groupEnd();

        //2.
        let pop = 0;
        resp.data.forEach(country => {
            pop += country.population
        });
        console.groupCollapsed('Ludność na świecie:')
        console.log(pop);
        console.groupEnd();

        //3.
        let avr = pop/resp.data.length;
        console.log(`Średnia liczba ludności w państwie wynosi: ${avr}`);

        //4. 
        let plusGrow = resp.data.filter( country => country.grow > 0);
        console.log(`Dodatni wzrost zaobserwowano w ${plusGrow.length} państwach`);

        //5.
        let minGrow = resp.data.filter( country => country.grow < 0);
        console.log(`Ujemny wzrost zaobserwowano w ${minGrow.length} państwach`);

        //6. 
        // let area = 0;
        // resp.data.forEach(country => area += country.world_area_in_percent);
        let area = resp.data.map(a => a.world_area_in_percent).reduce( (a,b) =>  a + b);
        console.log(area);

        //7.
        let fer = resp.data.map( a => a.fertility_rate).reduce( (a,b) => a + b)/resp.data.filter( a => a.fertility_rate != null).length;
        console.log("Średnia dzietność na świecie wynosi: " + fer);

        //8.
        let age = resp.data.map( a => a.medium_age).reduce( (a,b) => a + b)/resp.data.filter(a => a.medium_age != null).length;
        console.log("Średnia wieku na świecie wynosi: " + age);

        //9.
        let pl = resp.data.find(a => a.name == "Poland");
        console.log(pl);
        console.log('Dane dot. Polski');
        for (let key in pl) {
            console.log(`${key} : ${pl[key]}`);
        };

        //10.
        pl.medium_age > age ? console.log('Średnia wieku w PL jest większa od tej na świecie.') : console.log('Średnia wieku w PL nie jest większa od tej na świecie.');



    })