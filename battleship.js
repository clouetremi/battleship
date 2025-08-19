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
        return this.length === this.hitTimes;
    }
}

class Tile {
    constructor(status = "water", coordinate) {
        this.status = status;
        this.coordinate = coordinate; 
    }

    isWater() {
        if (this.status === "water") {
            return true; 
        }
    }
}


class Gameboard {
    shiplist = [];
    constructor(size = 10) {
        const initialGrid = [];
        for (let i = 0; i < size; i++) {
            const array = [];
            for (let j = 0; j < size; j++) {
                array.push(new Tile(i, j));
            }
            initialGrid.push(array);
        }
        // sauvegarde la grille sous la propriété de l'objet créé par la classe
        this.grid = initialGrid;
    }

    isValidMove(x, y, ship, direction) {
        if (Tile[x, y] === isWater()) {
            if (direction === "v" && x + ship.length < this.grid.length) {
                return true;
            } else if (direction === "h" && y + ship.length < this.grid[x].length) {
                return true;
            }
        } else {
            return "this move is not valid"
        }
    }
}

const tile1 = new Tile("water", [1, 1]); 
console.log(tile1);

const board = new Gameboard(); 
console.log(board); 

const testMove = board.isValidMove(1, 1, ship, "v");

module.exports = {
    Ship, Gameboard
}