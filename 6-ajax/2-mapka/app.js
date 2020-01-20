const map = L.map('mapid').setView([51.919437, 19.145136], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A'
}).addTo(map);

/*----------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 ----------------------------------------------------*/

const select = document.querySelector('#countrySelect');
const data = document.querySelector('#countryData');
const flag = document.querySelector('#countryFlag');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.eu/rest/v2/all?fields=iso2Code;name', true);
xhr.send();

xhr.addEventListener('load', function() {
    if (xhr.status == 200) {
        const json = JSON.parse(xhr.response);
        for (let country of json) {
            let item = `<option value=${country.name}>${country.name}</option>`;
            select.innerHTML += item;
        }
        select.removeAttribute('disabled');
    }
})

select.addEventListener('change', function() {
    const val = this.value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://restcountries.eu/rest/v2/name/'+val, true);
    ajax.send();
    ajax.addEventListener('load', function() {
        if (ajax.status == 200) {
            const res = JSON.parse(ajax.response);
            const country = res[0];
            console.log(res);
            data.querySelector('.country-name').innerHTML = country.name;
            data.children[1].lastElementChild.innerHTML = country.capital;
            data.children[2].lastElementChild.innerHTML = country.region;
            data.children[3].lastElementChild.innerHTML = country.subregion;
            data.children[4].lastElementChild.innerHTML = country.population;
            data.children[5].lastElementChild.innerHTML = country.timezones[0];
            flag.setAttribute('src', country.flag);
            map.setView(country.latlng, 5);
        }
    })
});



