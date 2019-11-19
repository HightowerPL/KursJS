document.addEventListener('DOMContentLoaded', function() {
    //1.
    document.querySelectorAll('.first-attempt').forEach(el => el.classList.add('active'));
    
    //2.
    const borders = document.querySelectorAll('[data-border]'); 
    for (i=0; i<borders.length; i++) {
         borders[i].dataset.elActive = true;
    }
    // .forEach(el => el.setAttribute('data-el-active', true));

    //3.
    const hacks = document.querySelectorAll('.hack');
    hacks.forEach( hack => {
        hack.setAttribute('title', 'hacking');
    });

    //4.
    const hijacks = document.querySelectorAll('.hijack');
    hijacks.forEach( hijack => { hijack.removeAttribute('title')});

    //5. 
    const sts = document.querySelectorAll('.st1.st2');
    sts.forEach(st => { st.style.color = 'red'; st.style.fontSize = '15px'});

    //6. 
    const dels = document.querySelectorAll('.del:not(.hijack)');
    dels.forEach( del => { del.setAttribute('data-hack-active', true); del.removeAttribute('data-hack-inactive')});

    //7. 
    const lasts = document.querySelectorAll('.last-attempt');
    lasts.forEach(last => {
        last.querySelector('span').style.visibility = 'hidden';
    })
})