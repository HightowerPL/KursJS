document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.car-toggle-detail');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btnClick(this);
        });
    })

    function btnClick(that) {
        const selectedCar = that.closest('.car');

        function changeData(car) {
            console.log(car.querySelector('.car-toggle-detail').innerText == 'POKAŻ DETALE');
            car.querySelector('.car-detail').style.display == 'none' ? car.querySelector('.car-detail').style.display = 'flex' : car.querySelector('.car-detail').style.display = 'none';
            car.classList.contains('car-show-detail') ? car.classList.remove('car-show-detail') : car.classList.add('car-show-detail');
            car.querySelector('.car-toggle-detail').innerText == 'POKAŻ DETALE' ? car.querySelector('.car-toggle-detail').innerText = 'UKRYJ DETALE' : car.querySelector('.car-toggle-detail').innerText = 'POKAŻ DETALE';
        }
        console.log(selectedCar);
        changeData(selectedCar);

    }
});