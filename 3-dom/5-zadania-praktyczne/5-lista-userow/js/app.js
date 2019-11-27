document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const list = document.querySelector('.user-list');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log(e);
        console.log(this);
        const list = document.querySelector('.user-list');
        const listItem = `<li class="user">
        <div class="user-data">
            <div class="user-name">${e.target[0].value }</div>
            <div class="user-phone">${e.target[1].value }</div>
        </div>
        <button type="button" class="btn user-delete">
            Usuń
        </button>
    </li>`
        list.innerHTML += listItem;

    });



    list.addEventListener('click', function(e) {
        
        if (e.target.classList.contains('user-delete')) {
            e.target.parentNode.remove();
        }
        
    })

})