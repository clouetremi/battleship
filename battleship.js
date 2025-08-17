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

    checkIfSunk() {
        if (this.hitTimes >= this.length) {
            this.isSunk = "isSunk";
        }
    }
}


class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.ships = [];
    }

    placeShip(x, y, length, hitTimes, isSunk) {
        const ship = new Ship(length, hitTimes, isSunk);
        ship.coordinates = [x, y];
        this.ships.push(ship);
        return ship
    }

    receiveAttack(x, y) {
        for (let ship of this.ships) {
            if (ship.coordinates[0] === x && ship.coordinates[1] === y) {
                ship.hit(); 
                ship.checkIfSunk(); 
                return "hit!";
            }
        }
        const missedShot = [x, y]; 
        return missedShot; 
    }

    checkIfAllSunk() {
        for (let ship of this.ships) {
            if (ship.isSunk !== "isSunk") {
                return "there are still ships no sunk"
            } 
        } 
        return "all ships are sunk"
    }
}




const board = new Gameboard();
const newShip = board.placeShip(9, 9, 4, 0, "notSunk");
console.log(newShip)

board.receiveAttack(9, 9)
board.receiveAttack(9, 9)
board.receiveAttack(9, 9)
board.receiveAttack(9, 9)
const missedShot = board.receiveAttack(8, 8)

console.log(newShip);
console.log(missedShot);


module.exports = {
    Ship, Gameboard
}