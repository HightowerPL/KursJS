document.addEventListener('DOMContentLoaded', function() {
    console.log(document.querySelector('.module:first-of-type'));
    console.log(document.getElementsByClassName('.module'));
    console.log(document.querySelectorAll('.module')[document.querySelectorAll('.module').length-1]);
    console.log(document.querySelectorAll('.list li'));
    console.log(document.querySelectorAll('.list li')[document.querySelectorAll('.list li').length/2-1]);
    console.log(document.getElementsByTagName('button'));
    console.log(document.querySelector('button[type="submit"]'));
    console.log(document.getElementsByTagName('body').childNodes);
})

