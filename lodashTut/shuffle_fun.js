const _ = require("lodash")

words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

console.log('1: ', _.shuffle(words));
console.log('2: ', _.shuffle(words));
console.log('3: ', _.shuffle(words));
console.log(words);

// create times 
_.times(4, () => {
   console.log("Hello");
})

// delay function
function message()
{
    console.log("Some message");
}

_.delay(message, 1000);
console.log("Some other message");

