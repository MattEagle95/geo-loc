import {isOnLand, isOnWater} from "./index";

const MOCK_COORDINATES = [{
    x: 0,
    y: 0,
},{
    x: 1,
    y: 1,
}];

describe('isOnLand', () => {
    test.each(MOCK_COORDINATES)('returns true for coordinates x: $x y: $y', ({x, y}) => {
        expect(isOnLand(x, y)).toBeTruthy();
    });

    test.each(MOCK_COORDINATES)('returns false for coordinates x: $x y: $y', ({x, y}) => {
        expect(isOnLand(x, y)).toBeTruthy();
    });
});