const { default: expect } = require("expect"); 
const { ship1, ship2, isSunk } = require("./battleship");

test("should find the right hitTimes", () => {
    expect(ship1.hitTimes).toBe(2);
});

test("should find the right length", () => {
    expect(ship1.length).toBe(4);
});

test("should find the right isSunk", () => {
    expect(ship1.isSunk).toBe("notSunk");
})

test("should find the value 6 for hitTimes of ship2", () => {
    expect(ship2.hitTimes).toBe(4);
})

test("should test if my ship is sunk", () => {
    expect(ship2.isSunk).toBe("isSunk");
})