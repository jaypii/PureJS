const _ = require("lodash")

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chunking array
let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);

let c3 = _.chunk(nums, 5);
console.log(c3);

// slicing array
let s1 = _.slice(nums, 2, 6);
console.log(s1);

let s2 = _.slice(nums, 0, 9);
console.log(s2);

let r = _.random(6);
console.log('Dice:', r+1);
