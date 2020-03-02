const _ = require("lodash");

const nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];
const words = ["sky","Sun","Blue Island"]

const sum = _.reduce(nums, (total, next) => { return total + next });
console.log(sum);

const colours = ["red", "green", "white", "blue", "black"];

const res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
console.log(res);

// string case example
console.log(_.map(words, _.camelCase));
console.log(_.map(words, _.capitalize));
console.log(_.map(words, _.kebabCase));
console.log(_.map(words, _.lowerCase));
console.log(_.map(words, _.upperCase));