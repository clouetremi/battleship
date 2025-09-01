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

    placeShip(x, y, length, direction) {

        const ship = new Ship(length, 0);

        if (direction === "h") {
            if (x >= 0 && x < this.grid.length &&
                y >= 0 && y + ship.length <= this.grid.length) {

                for (let i = 0; i < ship.length; i++) {
                    if (this.grid[x][y + i] !== "x") {
                        return false;
                    }
                }

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x][y + i] = "S";
                }
                return true;
            }
        } else if (direction === "v") {
            if (x >= 0 && x < this.grid.length &&
                y >= 0 && y + ship.length <= this.grid.length) {

                for (let i = 0; i < ship.length; i++) {
                    if (this.grid[x + i][y] !== "x") {
                        return false;
                    }
                }

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x + i][y] = "S";
                }
                return true;
            }
        }
        return false; 
    }
}

const board = new Gameboard();
console.log(board)


module.exports = {
    Ship, Gameboard
}