// battleship.js 

class Ship {
    constructor(length, hitTimes, isSunk) {
        this.length = length;
        this.hitTimes = hitTimes;
        this.isSunk = isSunk;
    }

    hit() {
        this.hitTimes++;
    }
}

function isSunk(hitShip) {
    if (hitShip.hitTimes >= hitShip.length) {
        hitShip.isSunk = "isSunk";
    }
}

class Gameboard {
    constructor(x, y) {
        this.ship = new Ship(4, 0, "notSunk");
        this.ship.coordinates = [x,y];

    }

    receiveAttack(x, y) {
        if (this.coordinates[0] === x && this.coordinates[1] === y) {
            this.ship.hit(); 
        }
    }
}

module.exports = {
    Ship, isSunk, Gameboard
}