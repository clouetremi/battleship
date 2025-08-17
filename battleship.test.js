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


test("should find the right isSunk after ship is hitted", () => {
    const ship1 = new Ship(4, 3, "notSunk");
    ship1.hit();
    ship1.checkIfSunk();
    expect(ship1.isSunk).toBe("isSunk");
});

test("Gameboard should be able to place ships at coordinates x/y", () => {
    const board = new Gameboard();
    const newShip = board.placeShip(9, 9, 4, 0, "notSunk");
    expect(newShip.coordinates).toEqual([9, 9])
})

test("Gameboard should return coordinates", () => {
    const ship4 = new Gameboard();
    ship4.coordinates = [9, 9]
    expect(ship4.coordinates).toEqual([9,9])
})
