let sum = 0;

users.forEach(user => {
    sum += parseFloat(user.payment);
})

console.log(`Zarobki wszystkich użytkowników: ${sum}`);