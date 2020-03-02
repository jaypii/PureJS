const _ = require("lodash")

words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

objArr = [
   {id: 1, name: 'John', age: 25},
   {id: 2, name: 'Mary', age: 24},
   {id: 3, name: 'Brad', age: 5},
   {id: 4, name: 'Susan', age: 17}
]

let fobj = _.first(objArr);
let lobj = _.last(objArr);

let fel = _.first(words);
let lel = _.last(words);

console.log(`First object: ${fobj.name}, ${fobj.age}`);
console.log(`Last object: ${lobj.name}, ${lobj.age}`);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);