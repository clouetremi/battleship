// battleship.js 

class Ship {
    constructor(length, hits) {
        this.length = length;
        this.hits = hits;
    }

    hit() {
        this.hits++;
    }

    checkIfSunk() {
        return this.hits >= this.length;
    }
}

class Gameboard {
    shiplist = [];
    constructor(size = 10) {
        const initialGrid = [];
        for (let i = 0; i < size; i++) {
            const array = [];
            for (let j = 0; j < size; j++) {
                array.push("x");
            }
            initialGrid.push(array);
        }
        // sauvegarde la grille sous la propriété de l'objet créé par la classe
        this.grid = initialGrid;
    }

    // isValidMove(x, y, ship, direction) {
    //     if (Tile[x, y] === isWater()) {
    //         if (direction === "v" && x + ship.length < this.grid.length) {
    //             return true;
    //         } else if (direction === "h" && y + ship.length < this.grid[x].length) {
    //             return true;
    //         }
    //     } else {
    //         return "this move is not valid"
    //     }
    // }
}

const board = new Gameboard();
console.log(board)


module.exports = {
    Ship, Gameboard
}