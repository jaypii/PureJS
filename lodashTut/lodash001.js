const _ = require("lodash");

const vals = [-2, 0, 3, 7, -5, 1, 2];
const nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

const sum = _.sum(vals);
console.log('Sum of vals: ',sum);

const pos_nums = _.filter(nums, (e) => e > 0);
console.log('Positive numbers in nums: ',pos_nums);

const neg_nums = _.filter(nums, (e) => e < 0);
console.log('Negative numbers in nums: ', neg_nums);

const [nums2, nums3] = _.partition(nums, (e) => e < 0);
console.log(nums2);
console.log(nums3);




