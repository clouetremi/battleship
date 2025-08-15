const { default: expect } = require("expect"); 
const { ship1, ship2, hit } = require("./battleship");

test("should find the right hitTimes", () => {
    expect(ship1.hitTimes).toBe(2);
});

test("should find the right length", () => {
    expect(ship1.length).toBe(35);
});

test("should find the right isSunk", () => {
    expect(ship1.isSunk).toBe("isSunk");
})

test("hit function should increase 2 times number of hits", () => {
    expect(ship2.hitTimes).toBe(7)
});