// export const findOdd = (numbers: number[]) => {
//   const res = numbers.reduce<Record<number, number>>(
//     (acc, item) => ({
//       ...acc,
//       ...{ [item]: acc[item] ? acc[item] + 1 : 1 },
//     }),
//     {}
//   );

//   return Number(Object.entries(res).find(([key, val]) => val % 2)?.[0]);
// };

export const findOdd = (xs: number[]) => xs.reduce((a, b) => a ^ b);
