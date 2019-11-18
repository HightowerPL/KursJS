const text = {
    check(txt, word) {
        return txt.search(word) != -1 ? true : false;
    },
    getCount(txt) {
        return txt.length;
    },
    getWordsCount(txt) {
        return txt.split(' ').length;
    },
    setCapitalize(txt) {
        return txt.capitalize()
    },
    setMix(txt) {
        let mount = "";
        for (let i = 0; i < txt.length; i++) {
            i % 2 == 0 ? mount += txt.charAt(i).toUpperCase() : mount += txt.charAt(i).toLowerCase();
        }
        return mount;
    },
    generateRandom(lng) {
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let mount = "";
        for (i = 0; i < lng; i++) {
            mount += abc.charAt(Math.floor(Math.random()*52+1));
        }
        //Math.random().toString(36).substr(2, lng);
        return mount
    }

}

console.log(text.generateRandom(10));