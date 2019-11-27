document.addEventListener('click', function() {
    const links = document.querySelectorAll('a');
    for (let link of links) {
        link.addEventListener('click', function() {
            let active = document.querySelector('.nav-el-active');
            let href = this.getAttribute('href');
            active.classList.remove('nav-el-active');
            this.parentNode.classList.add('nav-el-active');

            document.querySelector(href).scrollIntoView();
        });
    }
});