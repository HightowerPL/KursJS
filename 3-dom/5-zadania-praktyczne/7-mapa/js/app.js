document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('.map');
    const tooltip = document.createElement('DIV');
    let markers;

    for (let city of cities) {
        const el = document.createElement('A');

        el.setAttribute('href', city.href);
        el.classList.add('map-marker');
        el.dataset.name =  city.name;
        el.dataset.population = city.population;
        el.style.left = `${city.map_x}px`;
        el.style.top = `${city.map_y}px`;
        el.innerText = city.name;
        map.append(el);
    }

    tooltip.classList.add('map-tooltip');
    tooltip.style.top = '-9999px';
    tooltip.style.left = '-9999px';
    map.append(tooltip);

    markers = document.querySelectorAll('.map-marker');

    for (let mark of markers) {
        mark.addEventListener('mouseover', addMouseOver);
        mark.addEventListener('mousemove', addMouseMove);
        mark.addEventListener('mouseout', addMouseOut);
    }

    function addMouseOver(e) {
        let marker = e.target;

        tooltip.innerHTML = `<h2>${marker.dataset.name}</h2><div>Population: <strong>${marker.dataset.population}</strong></div>`
        tooltip.style.top = `${e.clientY  - e.target.parentNode.offsetTop + 15}px`;
        tooltip.style.left = `${e.clientX  - e.target.parentNode.offsetLeft  + 15}px`;
        tooltip.style.display = "inline-block";
    }

    function addMouseMove(e) {
        console.log(e);
        tooltip.style.top = `${e.clientY - e.target.parentNode.offsetTop  + 15}px`;
        tooltip.style.left = `${e.clientX - e.target.parentNode.offsetLeft + 15}px`;
    }

    function addMouseOut(e) {
        tooltip.innerHTML = ``;
        tooltip.style.display = "none";
    }
});