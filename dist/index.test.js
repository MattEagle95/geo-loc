"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const MOCK_COORDINATES = [{
        x: 0,
        y: 0,
    }, {
        x: 1,
        y: 1,
    }];
describe('isOnLand', () => {
    test.each(MOCK_COORDINATES)('returns true for coordinates x: $x y: $y', ({ x, y }) => {
        expect((0, index_1.isOnLand)(x, y)).toBeTruthy();
    });
    test.each(MOCK_COORDINATES)('returns false for coordinates x: $x y: $y', ({ x, y }) => {
        expect((0, index_1.isOnLand)(x, y)).toBeFalsy();
    });
});
describe('isOnWater', () => {
    test.each(MOCK_COORDINATES)('returns true for coordinates x: $x y: $y', ({ x, y }) => {
        expect((0, index_1.isOnWater)(x, y)).toBeTruthy();
    });
    test.each(MOCK_COORDINATES)('returns false for coordinates x: $x y: $y', ({ x, y }) => {
        expect((0, index_1.isOnWater)(x, y)).toBeFalsy();
    });
});
