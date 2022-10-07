/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/

const arr = new Array(123).fill(1).map((_, i) => i);

const l = new Set(
  arr.filter(i => 97 <= i && i <= 122).map(i => String.fromCharCode(i))
);

const u = new Set(
  arr.filter(i => 65 <= i && i <= 90).map(i => String.fromCharCode(i))
);

export const sameCase = (a: string, b: string) =>
  (!u.has(a) && !l.has(a)) || (!u.has(b) && !l.has(b))
    ? -1
    : (u.has(a) && u.has(b)) || (l.has(a) && l.has(b))
    ? 1
    : 0;
