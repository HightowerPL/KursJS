/*------------------------------------------
1)
Na stronie masz prosty formularz
Po jego wysłaniu zrób zapytanie na adres

https://www.googleapis.com/books/v1/volumes?q=TITLE

gdzie TITLE to tytuł wpisany w formularz.

W odpowiedzi wypisz w konsoli tylko tytuły książek.

2)
Dodatkowe: zadanie spróbuj wykonać korzystając z:
XMLHttpRequest
Fetch
axios
jquery ajax
linki do axios i jquery wstaw korzystając z serwerów cdn
------------------------------------------
*/


const form = document.querySelector('#searchForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const val = form.value;
    
    //Fetch
    fetch('https://www.googleapis.com/books/v1/volumes?q='+val)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);

            for (let book of resp.items) {
                console.log(book.volumeInfo.title);
            }
        })

    //Axios
    // axios.get('https://www.googleapis.com/books/v1/volumes?q='+val).then(resp => {
    //     console.log(resp.data);
    //     const res = resp.data;

    //     for (let book of res.items) {
    //         console.log(book.volumeInfo.title);
    //     }
    // });
    
    // XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q='+val, true);
    // xhr.send();
    // xhr.addEventListener('load', function(){
    //     const res = JSON.parse(xhr.response);

    //     for (let book of res.items) {
    //         console.log(book.volumeInfo.title);
    //     }
    // })

})