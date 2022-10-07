import { sameCase } from './kata1v2';

type EntityId = string | number;
type TestItem = { id: EntityId; a: string; b: string; expected: number };
type TestData = { ids: EntityId[]; entities: Record<EntityId, TestItem> };
const tests = [
  { a: 'C', b: 'B', expected: 1 },
  { a: 'b', b: 'a', expected: 1 },
  { a: 'd', b: 'd', expected: 1 },
  { a: 'A', b: 's', expected: 0 },
  { a: 'c', b: 'B', expected: 0 },
  { a: 'b', b: 'Z', expected: 0 },
  { a: '\t', b: 'Z', expected: -1 },
  { a: 'H', b: ':', expected: -1 },
];
const testData = tests.reduce<TestData>(
  ({ ids, entities }, item, index) => ({
    ids: [...ids, `${index}`],
    entities: { ...entities, [`${index}`]: { id: `${index}`, ...item } },
  }),
  { ids: [], entities: {} }
);

const doTest = (testId: EntityId) => {
  const { a, b, expected } = testData.entities[testId];

  it(`Testing for sameCase("${a}","${b}")`, () => {
    const result = sameCase(a, b);
    expect(result).toBe(expected);
  });
};

describe('Solution to kata 1: sameCase', () => {
  testData.ids.forEach(doTest);
});
