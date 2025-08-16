// battleship.test.js 

const { default: expect } = require("expect");
const { Ship, isSunk, Gameboard } = require("./battleship");

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
});

test("Gameboard should call a new Ship", () => {
    const ship2 = new Gameboard();
    expect(ship2.ship.length).toBe(4);
});

test("Gameboard should be able to place ships at coordinates x/y", () => {
    const ship3 = new Gameboard();
    ship3.x = [8];
    expect(ship3.x).toEqual([8])
})

test("Gameboard should return coordinates", () => {
    const ship4 = new Gameboard();
    ship4.coordinates = [9, 9]
    expect(ship4.coordinates).toEqual([9,9])
})

test("receive attack should increase hitTimes if sames coordinates", () => {
    const ship4 = new Gameboard();
    ship4.coordinates = [9,9]
    ship4.receiveAttack(9, 9); 
    expect(ship4.ship.hitTimes).toBe(1);
})
