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
    // syntaxe moderne pour écrire constructor(size = 10) {
    // this.shiplist = []; ... }
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
                    this.grid[x][y + i] = "ship";
                }
                // { ship, ... } raccourci d'object qui équivaut à { ship: ship, ... }
                // Array.from créé un tableau de taille ship.length
                // 1er paramètre { length: ship.length } dit combien d'éléments on veut

                // (_, i) => [x, y + i]
                // fonction de mapping reçoit 2 arguments (valeurCourante, index)
                // On met "_" pour ignorer, i est l'index (1, 2, 3)
                this.shiplist.push({ ship, coords: Array.from({ length: ship.length }, (_, i) => [x, y + i]) });
                return true;
            }
        } else if (direction === "v") {
            if (x >= 0 && x + ship.length <= this.grid.length &&
                y >= 0 && y < this.grid.length) {

                for (let i = 0; i < ship.length; i++) {
                    if (this.grid[x + i][y] !== "x") {
                        return false;
                    }
                }

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x + i][y] = "ship";
                }
                this.shiplist.push({ ship, coords: Array.from({ length: ship.length }, (_, i) => [x + i, y]) });
                return true;
            }
        }
        return false;
    }



    receiveAttack(x, y) {

        const attackArea = this.grid[x][y];

        if (attackArea === "x") {
            this.grid[x][y] = "missed"
        } else if (attackArea === "ship") {
            this.grid[x][y] = "hit";

            for (const { ship, coords } of this.shiplist) {
                if (coords.some(([cx, cy]) => cx === x && cy === y)) {
                    ship.hit();
                    break;
                }
            }
        }

    }

    checkIfAllSunk() {
        return this.shiplist.every(({ ship }) => ship.checkIfSunk());
    }
}

const board = new Gameboard(); 
board.placeShip(1, 1, 3, "h"); 
board.receiveAttack(1,1);
board.receiveAttack(1,2);
console.log(board);

module.exports = {
    Ship, Gameboard
}