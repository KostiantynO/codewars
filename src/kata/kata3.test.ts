import { countBits } from './kata3';

const testData = [
  [0, 0],
  [4, 1],
  [7, 3],
  [9, 2],
  [10, 2],
];

const doTest = ([decimal, expected]: number[]) => {
  it('test', () => {
    expect(countBits(decimal)).toBe(expected);
  });
};

describe('example', () => {
  testData.forEach(doTest);
});
