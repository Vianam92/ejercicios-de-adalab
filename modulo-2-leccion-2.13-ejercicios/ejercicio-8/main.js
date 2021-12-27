"use strict";

const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, number) => {
  console.log(acc)
}
);

console.log(media);


const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

const result = scores.reduce((acc, number) => acc + number, 0);

console.log(result);