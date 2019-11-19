document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.list li');
 
    list.forEach( el => {
        if (el.dataset.status == 'up') {
            el.firstElementChild.style.color = 'green';
            el.firstElementChild.innerText = 'Dodatni';
        } else if (el.dataset.status == 'no-change') {
            el.firstElementChild.style.color = 'blue';
            el.firstElementChild.innerText = 'Bez zmian';
        } else {
            el.firstElementChild.style.color = 'red';
            el.firstElementChild.innerText = 'ujemny';
        }
    });
 


})