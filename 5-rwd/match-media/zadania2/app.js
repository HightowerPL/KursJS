const div = document.querySelector('.element');
window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        div.innerText =`${window.innerHeight}x${window.innerWidth}`;
        div.style.backgroundColor = 'orangered';
    } else {
        div.innerText = `Szerokość ekranu poniżej 600px`;
        div.style.backgroundColor = 'blue';
    }
})

div.addEventListener('click', function() {
    if (window.innerWidth > 600) {
        console.log(`wysokość - ${window.innerHeight}px, szerokość - ${window.innerWidth}px`)
    }
});
