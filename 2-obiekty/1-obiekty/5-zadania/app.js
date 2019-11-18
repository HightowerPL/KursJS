const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random()*(max-min)+1)
    },
    generateIncTable(lng) {
        let incTab = [];
        for (i=0; i<lng; i++) {
            incTab.push(this.randomNumber(0, lng));
        }
        return incTab;
    },
    generateRandomTable(lng, min, max) {
        let table = [];
        for (i=0; i<lng; i++) {
            table.push(this.randomNumber(min, max));
        }
        return table;
    },
    generteTableFromText(str) {
        return typeof str != 'string' ? [] : str.split(' ');
    },
    getMaxFromTable(arr) {
        return Math.max(...arr);
    },
    getMinFromTable(arr) {
        return Math.min(...arr);
    },
    delete(arr, index) {
        arr.splice(index, 1);
        return arr;
    }
}

console.log(tableGenerator.delete([1, 2, 3, 34, 24, 1213, 1243, 665, 775], 5));
