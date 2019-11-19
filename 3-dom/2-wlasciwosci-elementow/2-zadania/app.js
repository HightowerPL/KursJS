document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('.list');

    list.classList.add('pretty');
    list.firstElementChild.classList.add('first');
    list.firstElementChild.classList.add('first');
    list.lastElementChild.classList.add('last');
    list.children[2].classList.add('active');
    list.children[2].style.color = 'white';

   console.log( list.querySelectorAll('a') );
   list.querySelectorAll('a').forEach( link => {
       link.setAttribute('title', `Przejdź na stronę ${link.innerText}`);
       link.setAttribute('href', '#');
   });


});