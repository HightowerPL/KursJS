const book = {
    users: [],
    addUser(userName, userAge, userPhone) {
        this.users.push({name: userName, age: userAge, phone: userPhone})
    },
    showUsers() {
        console.log('Wszyscy użytkoniwcy w książce');
        this.users.forEach(value => console.log(`${value.name}, lat ${value.age}, nr tel ${value.phone}`))
    },
    findByName(userName) {
        let user = this.users.find(user => user.name == userName);
        console.log(user);
    },
    findByPhone(userPhone) {
        let user = this.users.find(user => user.phone == userPhone);
        console.log(user);
    },
    getCount() {
        console.log(`W książce jest ${this.users.length} użytkowników`);
    }
}

book.addUser('Jakub', 25, 504443519);
book.addUser('Aga', 22, 504123321);
book.addUser('Dominika', 23, 543098543);
book.addUser('Tomek', 22, 543231111);

book.showUsers();
book.findByName('Aga');
book.findByPhone(504443519);
book.getCount();