const _ = require("lodash");

const p = {age: 24, name: "Rebecca", occupation: "teacher"};

const keys = _.keys(p);
console.log(keys);

const values = _.values(p);
console.log(values);

// lodash iterate object properties
_.forIn(p, (key,value) => {
   console.log(`${key}: ${value}`);
})