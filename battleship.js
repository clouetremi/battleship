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

const ship1 = new Ship(35, 2, "isSunk");
const ship2 = new Ship(10, 5, "notSunk")

ship2.hit()
ship2.hit()

console.log(ship1);
console.log(ship2);

module.exports = {
    ship1,
    ship2,
    hit
}