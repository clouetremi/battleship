const { default: expect } = require("expect");
const { Ship, isSunk } = require("./battleship");

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
    isSunk(ship1);
    expect(ship1.isSunk).toBe("isSunk");
})


