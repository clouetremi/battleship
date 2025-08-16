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
    constructor(ship, x, y) {
        ship = new Ship(4, 0, "notSunk"); 
        ship.x = [x]; 
        ship.y = [y]; 
        ship.coordinates = [x][y];
        return ship;
    }
}

module.exports = {
    Ship, isSunk, Gameboard
}