// battleship.test.js 

const { default: expect } = require("expect");
const { Ship, Gameboard } = require("./battleship");

test("should find the right hitTimes", () => {
    const ship1 = new Ship(4, 2);
    expect(ship1.hits).toBe(2);
});

test("should find the right length", () => {
    const ship1 = new Ship(4, 2);
    expect(ship1.length).toBe(4);
});

test("should see if the ship is sunk", () => {
    const ship1 = new Ship(4, 3);
    ship1.hit(); 
    expect(ship1.checkIfSunk()).toEqual(true); 
})

test("should check my board get 10 row & 10 col", () => {
    const board = new Gameboard(); 
    expect(board.grid.length).toEqual(10); 
    expect(board.grid[0].length).toEqual(10);
})

test("should be able to place ship horizontally", () => {
    const board = new Gameboard();
    expect(board.placeShip(1, 1, 2, "h")).toEqual(true); 
    expect(board.grid[1][1]).toEqual("S"); 
    expect(board.grid[1][2]).toEqual("S"); 
})