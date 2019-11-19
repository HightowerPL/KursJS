document.addEventListener('DOMContentLoaded', function(){
    const checks = document.querySelectorAll('input[type=checkbox');
    console.log(checks);
    checks.forEach(check => {
        check.addEventListener('click', function(){
            const whiteBox = this.parentNode.parentNode;
            whiteBox.classList.add('confirm');
            whiteBox.querySelectorAll('input:not([type=checkbox])').forEach(input => input.setAttribute('disabled', true));
        })
    })
})