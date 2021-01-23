const _ = require("lodash");

const nums = [657, 122, 3245, 345, 99, 18];
const words = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

console.log("Starting with 't'");
words.forEach( e => {

    if (_.startsWith(e, 't')) {
        console.log(e);
    }
});

console.log("Ending with 'k'");
words.forEach( e => {

    if (_.endsWith(e, 'k')) {

        console.log(e);
    }
});

// String padding
console.log('** String Padding **');
nums.forEach( e => {
   console.log(_.padStart(e.toString(), 50, '-'));
});