import { findOdd } from './kata4';

const testData: [number[], number][] = [
  [[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5],
  [[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1],
  [[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5],
  [[10], 10],
  [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10],
  [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1],
];

/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

const doTest = ([numbers, expected]: [number[], number]) => {
  it(`xs = ${JSON.stringify(numbers)} ; n = ${expected}`, () => {
    expect(findOdd(numbers)).toBe(expected);
  });
};

describe('Example tests', function () {
  testData.forEach(doTest);
});
