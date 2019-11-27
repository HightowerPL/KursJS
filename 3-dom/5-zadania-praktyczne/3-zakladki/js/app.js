document.addEventListener('DOMContentLoaded', function() {
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
        li.addEventListener('click', function(e) {
            liClick(e)
        });
    })

    function liClick(e) {
        e.preventDefault();   
        const target = e.target;
        const href = target.getAttribute('href');

        document.querySelector('.tab-el-active').classList.remove('tab-el-active');
        target.tagName == 'A' ? target.parentNode.classList.add('tab-el-active') : target.classList.add('tab-el-active');

        document.querySelector('.tab-content-active').classList.remove('tab-content-active');
        document.querySelector(href).classList.add('tab-content-active');


    }
});