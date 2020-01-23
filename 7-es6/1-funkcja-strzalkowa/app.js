const sum = (a,b) => {
    const result = a + b;
    console.log(result);
}

const myPow = a => console.log(Math.pow(a));

const hr = () => console.log('-------');

const bigWords = tab => {
    const result = [];
    for (let i=0; i<tab.length; i++) {
        result.push(tab[i].toUpperCase());
    }
    console.log(result)
    return result;
}

const sumTab = tab => {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    console.log(sum);
    return sum;   
}

const test = () => "abecadło z pieca spadło";

( () => console.log('Prawie koniec'));

const findFirst = (arr, name) => {
    let math = undefined;
    for (var i=0; i<arr.length; i++) {
        if (arr[i].name === name) {
            math = arr[i];
            break;
        }
    }
    return math;
}

sum(123,25);
hr();

myPow(2);
hr();

bigWords(['tab', 'rap', 'dab']);
hr();

sumTab([2,54,12]);
const ans = test();
console.log(ans)

//2
const ob = {
    counter: 0,
    showText() {
        setInterval( () => {
            this.counter++;
            console.log(`Dzisiaj zjadłem ${this.counter} placków!`);
        }, 500);
    }
}
// ob.showText();

//3
const obj = {
    favoriteColors : [`#30A9DE`, `#F6B352`, `#56A902`, `#f9320c`, `#181842`],
    bind() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            this.favoriteColors.forEach( color => {
                const div = document.createElement('div');
                div.classList.add('element');
                div.style.height = '100px';
                div.style.width = '100px';
                div.style.color = 'white';
                div.style.backgroundColor = color;
                div.innerText = color;
                document.querySelector('.container').append(div);
            })
        })
    }
}
obj.bind();



