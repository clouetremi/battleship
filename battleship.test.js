// battleship.test.js 

const { default: expect } = require("expect");
const { Ship, Gameboard } = require("./battleship");

test("should find the right hitTimes", () => {
    const ship1 = new Ship(4, 2, "notSunk");
    expect(ship1.hits).toBe(2);
});

test("should find the right length", () => {
    const ship1 = new Ship(4, 2, "notSunk");
    expect(ship1.length).toBe(4);
});