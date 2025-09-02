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

    expect(board.placeShip(1, 1, 2, "h")).toBe(true);
    
    const cellA = board.grid[1][1];
    const cellB = board.grid[1][2];
    
    expect(cellA).toBeInstanceOf(Ship);
    expect(cellB).toBeInstanceOf(Ship);
})

test("should not be possible to place a ship outside the board", () => {
    const board = new Gameboard(); 
    expect(board.placeShip(1, 12, 2, "h")).toEqual(false); 
    expect(board.placeShip(11, 10, 2, "h")).toEqual(false); 
})

test("should check the length of ship when placing", () => {
    const board = new Gameboard(); 
    expect(board.placeShip(4, 7, 4, "h")).toEqual(false);   
})

test("should see if ships are well pushed in the array", () => {
    const board = new Gameboard(); 
    expect(board.placeShip(1, 1, 2, "h")).toBe(true);
    
    const cellA = board.grid[1][1];
    const cellB = board.grid[1][2];
    
    expect(board.shiplist.length).toBe(1); 
    expect(board.shiplist[0]).toBe(cellA);
})

test("should try if my board's sea case can receive an attack", () => {
    const board = new Gameboard(); 
    board.receiveAttack(1, 1); 
    expect(board.grid[1][1]).toEqual("missed");
})

test("should try if my ship can receive an attack", () => {
    const board = new Gameboard(); 
    board.placeShip(1, 1, 2, "h"); 
    board.receiveAttack(1, 1); 
    expect(board.grid[1][1]).toBe("hit")
})

test("should check if the board can record a miss shoot", () => {
    const board = new Gameboard(); 
    board.receiveAttack(1, 1); 
    expect(board.grid[1][1]).toBe("missed")
})