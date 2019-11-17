const spaceShip = {
    name: 'Enterprise',
    currentLocation: 'Earth',
    flyDistance: 0,
    flyTo(place,distance) {
        this.currentLocation = place;
        this.flyDistance += distance
    },
    showInfo() {
        console.log(`    Informacje o statku:
        --------------------
        Statek Enterprise lecący z szybkością ${this.name}
        doleciał do miejsca ${this.currentLocation}
        Statek przeleciał już całkowity dystans ${this.flyDistance}`)
    },
    meetClingon() {
        let req = 0;
        for (i=0;i<99; i++) {
            Math.floor((Math.random()*100)+1) >= 50 ? req += 1 : void 0; 
        }
        console.log(req);
        if (req >= 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`)
        } else {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`)
        }


    }
}

spaceShip.flyTo('Mars', 12000);
spaceShip.flyTo('Nebula', 510770);
spaceShip.flyTo('Tatoonie', 232311);
spaceShip.showInfo();
spaceShip.meetClingon();