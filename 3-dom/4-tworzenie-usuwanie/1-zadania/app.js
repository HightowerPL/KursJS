/*
Za pomocą JS stwórz nowy element, który będzie miał:

- wymiary 300px x 300px
- losowy kolor tła
- wyświetlanie typu inline-flex
- zaokrąglenie rogów o wielkości 5px
- wycentrowany tekst na środku "Element nr ...." który wyliczysz
- font powinien być sans-serif

Po stworzeniu elementu dodaj go do body

Powyższe czynności spróbuj zrobić w intervale ustawionym na 1000ms.
*/

document.addEventListener('DOMContentLoaded', function() {

    let count = 0;

    function createElement() {
        count++;
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.style.width = '300px';
        div.style.height = '300px';
        div.style.color = 'white';
        div.style.backgroundColor = getRandomColor();
        div.style.display = 'inline-flex';
        div.style.borderRadius = '5px';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.fontFamily = 'sans-serif';
        div.innerText = `Element nr ${count}`;
        body.append(div);
    }
    

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      setInterval(createElement, 2000);
});

