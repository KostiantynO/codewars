export const reverseWords = (str: string) =>
  str
    .split(' ')
    .map(i => Array.from(i).reverse().join(''))
    .join(' ');
