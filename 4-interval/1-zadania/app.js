let counter = 1;
const count = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter > 20) {
        clearInterval(count)
    }
}, 300);

//Zad2
const div = document.createElement('DIV');
div.classList.add('box');
document.body.append(div);
const change = setInterval(function() {
    div.style.width = `${randomNr(100,500)}px`; 
    div.style.height = `${randomNr(100,500)}px`; 
    div.style.backgroundColor = randomColor();
}, 500);

function randomNr(min, max) {
    return Math.floor(Math.random()*(max-min)) +min;
}

function randomColor() {
    const abc = '01234567890';
    let color = '#';
    for (let i =0; i <= 5; i++) {
        color += abc.charAt(Math.floor(Math.random()*(10))); 
    }
    console.log(color);
    return `${color}`
}

//Zad 3
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    infoBox.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    document.body.appendChild(infoBox);

    setTimeout(() => {
        infoBox.classList.add('hide');
        infoBox.addEventListener('transitionend', function() {
            this.remove();
        })
    }, 2000)

})
