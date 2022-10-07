/*
need sameCase fn, to check two chars for case.

either not letter => -1
both same case => 1
both letters, but not the same case => 0
*/

export const sameCase = (a: string, b: string) =>
  isLetter(a) && isLetter(b) ? +(isLow(a) === isLow(b)) : -1;

const isLetter = (c: string) => /[a-z]/i.test(c);
const isLow = (c: string) => /[a-z]/.test(c);
