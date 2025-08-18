// battleship.test.js 

const { default: expect } = require("expect");
const { Ship, Gameboard } = require("./battleship");

test("should find the right hitTimes", () => {
    const ship1 = new Ship(4, 2, "notSunk");
    expect(ship1.hitTimes).toBe(2);
});

test("should find the right length", () => {
    const ship1 = new Ship(4, 2, "notSunk");
    expect(ship1.length).toBe(4);
});


test("should find the right isSunk after ship is hit", () => {
    const ship1 = new Ship(4, 3);
    ship1.hit();
    ship1.checkIfSunk();
    expect(ship1.checkIfSunk()).toBe(true);
});

// test("Gameboard should be able to place ships at coordinates x/y", () => {
//     const board = new Gameboard();
//     const newShip = board.placeShip(9, 9, 4, 0, "notSunk");
//     expect(newShip.coordinates).toEqual([9, 9])
// })

// test("Gameboard should return coordinates", () => {
//     const ship4 = new Gameboard();
//     ship4.coordinates = [9, 9]
//     expect(ship4.coordinates).toEqual([9,9])
// })

// test("function receiveAttack should call function hit on a ship", () => {
//     const board = new Gameboard(); 
//     const newShip = board.placeShip(9, 9, 4, 3, "notSunk"); 
//     board.receiveAttack(9,9);
//     expect(newShip.hitTimes).toBe(4);
// });

// test("should keep track of missed attacks", () => {
//     const board = new Gameboard(); 
//     const newShip = board.placeShip(9, 9, 4, 3, "notSunk"); 
//     const missedShot = board.receiveAttack(8, 8);
//     expect(missedShot).toEqual([8,8])
// })

// test("should report if all ships have been sunk", () => {
//     const board = new Gameboard(); 
//     const newShip = board.placeShip(9, 9, 4, 4, "isSunk"); 
//      expect(board.checkIfAllSunk()).toMatch("all ships are sunk")
// })