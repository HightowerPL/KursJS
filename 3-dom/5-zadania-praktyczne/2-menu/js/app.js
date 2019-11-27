document.addEventListener('DOMContentLoaded', function() {
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
        li.addEventListener('click', function(e) {
            liClick(e)
        });
    })

    function liClick(e) {
        e.preventDefault();   
        document.querySelector('.nav-el-active').classList.remove('nav-el-active');
        e.target.classList.add('nav-el-active');

    }
});