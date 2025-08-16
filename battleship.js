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

// class Gameboard {
//     constructor() {
//     }
//     placeShip(x, y) {
//         return new Ship[x][y];
//     }
// }

// ship2.hit();
// isSunk(ship2);


module.exports = {
    Ship, isSunk
}