document.addEventListener('scroll', function(e) {
    console.log(window);
    const header = document.querySelector('.header');
    if (window.innerWidth > 600) {
        window.scrollY > 100 ? header.classList.add('sticky') : header.classList.remove('sticky');
    }
})