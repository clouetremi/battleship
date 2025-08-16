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

const ship1 = new Ship(4, 2, "notSunk");
const ship2 = new Ship(4, 3, "notSunk")

ship2.hit();
isSunk(ship2); 

console.log(ship1);
console.log(ship2);

module.exports = {
    ship1,
    ship2,
    isSunk
}