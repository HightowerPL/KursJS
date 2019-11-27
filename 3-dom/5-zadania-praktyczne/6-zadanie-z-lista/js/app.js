document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const list = document.querySelector('.list');
    
    function addBtn() {
        const el = document.createElement('DIV');
        el.classList.add('element');
        el.innerHTML = `<h3 class="element-title">Element numer <span class="nr">${document.querySelectorAll('.element').length + 1}</span></h3>
        <button class="clone">Clone</button>
        <button class="delete">Delete</button>`;       
        list.append(el);
    }

    function removeElem(e) {
        e.target.parentNode.remove();
    }

    function cloneElem(e) {
        const cloned = e.target.parentNode.cloneNode(true);
        //list.append(cloned);  //klonuje element na koniec listy
        list.insertBefore(cloned, e.target.parentNode);
    }

    btn.addEventListener('click', addBtn);

    list.addEventListener('click', function(e){
        if (e.target.classList.contains('delete')) {
            removeElem(e);
        } else if (e.target.classList.contains('clone')) {
            cloneElem(e)
        }
    })

});