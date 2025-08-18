// battleship.js 

class Ship {
    constructor(length, hitTimes) {
        this.length = length;
        this.hitTimes = hitTimes;
    }

    hit() {
        this.hitTimes++;
    }

    checkIfSunk() {
        return this.length === this.hitTimes; 
    }
}


class Gameboard {
    shiplist = []; 
    constructor(size = 10) {
        const initialGrid = []; 
        for (let i = 0; i < size; i++) {
            const array = []; 
            for (let j = 0; j < size; j++) {
                array.push(Cell(i, j)); 
            }
            initialGrid.push(array); 
        }
        // sauvegarde la grille sous la propriété de l'objet créé par la classe
        this.grid = initialGrid; 
    }

    isValidMove(x, y) {
        // const shipCoord = [x, y]
        if (this.grid[x][y] === "sea") {
            return true; 
        }
    }



    // placeShip(x, y, length, ship, direction) {
    //     if isValidMove(x, y, ship, direction) {
    //     }
    // }

    // receiveAttack(x, y) {
    //     for (let ship of this.ships) {
    //         if (ship.coordinates[0] === x && ship.coordinates[1] === y) {
    //             ship.hit(); 
    //             ship.checkIfSunk(); 
    //             return "hit!";
    //         }
    //     }
    //     const missedShot = [x, y]; 
    //     return missedShot; 
    // }

    // checkIfAllSunk() {
    //     for (let ship of this.ships) {
    //         if (ship.isSunk !== "isSunk") {
    //             return "there are still ships no sunk"
    //         } 
    //     } 
    //     return "all ships are sunk"
    // }
}

function Cell() {
    let tile = "sea";
    return tile; 
}


    const board = new Gameboard(); 
    console.log(board);
    console.log(board.grid[0][0]);
    console.log(board.isValidMove(1, 1)); 


module.exports = {
    Ship, Gameboard
}