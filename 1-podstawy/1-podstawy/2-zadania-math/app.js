const num1 = Math.floor(Math.random()*(20-10+1) + 10);
const num2 = Math.floor(Math.random()*(20-10+1) + 10);
const num3 = Math.floor(Math.random()*(20-10+1) + 10);

console.log(num1, num2, num3);
console.log(Math.max(num1, num2, num3));

console;

console.error('ERROR');
console.time();
console.groupEnd('AVC');
console.timeStamp('Czas');
console.count("licznik");
console.warn("UWAGA!!!");


console.log("Licza PI: " + Math.round(Math.PI));
console.log("sinus z 1: " + Math.round(Math.sin(1),2));
console.log("cosinus z 1: " + Math.round(Math.cos(1)));
console.log("tangens z 1: " + Math.round(Math.tan(1)));


const random = Math.round(Math.random()*(10-1+1)*1);

console.log("Losowa liczba to " + random);
const userNum = prompt();

random == userNum ? alert("Trafiłeś!") : alert("Niestety nie tym razem");