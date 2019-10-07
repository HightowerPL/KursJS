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