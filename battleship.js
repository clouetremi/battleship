console.log("test");

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
    constructor(ship) {
        this.ship = ship;
        ship = new Ship(4, 0, "notSunk"); 
        return ship;
    }

    placeShip(x) {
        const coordinates = x;
        return coordinates; 
    }
}

module.exports = {
    Ship, isSunk, Gameboard
}