document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    const menuItems = menu.querySelectorAll('li');
    const menuLinks = menu.querySelectorAll('a');

    menu.classList.add('menu');

    for (let link of menuLinks) {
        link.addEventListener('mouseover', function() {
            document.querySelector('.active').classList.remove('active');
            this.parentNode.classList.add('active');
        });

        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('klik');
            for (let item of menuItems) {
                !item.classList.contains('active') ? item.classList.add('collapsed') : void 0;
            }

            link.parentNode.classList.add('expand');
            link.parentNode.addEventListener('transitionend', expandElementTransitionEnd);
        });
    }

    function expandElementTransitionEnd() {
        this.removeEventListener('transitionend', expandElementTransitionEnd);
        console.log(this.firstChild.getAttribute('href'))
        const btn = document.createElement('BUTTON');

        btn.classList.add('close');
        btn.innerText = 'Zamknij';

        btn.addEventListener('click', function() {
            console.log(this)
            this.parentNode.classList.remove('expand');
            for (let item of menuItems) {
                item.classList.remove('collapsed');
            }
            this.parentNode.removeChild(this);
        })
        this.append(btn);
    }

});