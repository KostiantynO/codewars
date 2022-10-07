import { reverseWords } from './kata2';

const tests = [
  {
    text: 'The quick brown fox jumps over the lazy dog.',
    esrever: 'ehT kciuq nworb xof spmuj revo eht yzal .god',
  },
  // { text: 'apple', esrever: 'elppa' },
  // { text: 'a b c d', esrever: 'a b c d' },
  // { text: 'double  spaced  words', esrever: 'elbuod  decaps  sdrow' },
];

type EntityId = string | number;

type TestsData = {
  ids: EntityId[];
  entities: Record<EntityId, { text: string; esrever: string }>;
};

const testsData = tests.reduce<TestsData>(
  ({ ids, entities }, item, i) => ({
    ids: [...ids, `${i}`],
    entities: { ...entities, [`${i}`]: { id: `${i}`, ...item } },
  }),
  { ids: [], entities: {} }
);

const doTest = (testId: EntityId) => {
  const { text, esrever } = testsData.entities[testId];

  it('Should return a proper value', () => {
    expect(reverseWords(text)).toBe(esrever);
  });
};

describe('Sample Test Cases', () => {
  testsData.ids.forEach(doTest);
});
