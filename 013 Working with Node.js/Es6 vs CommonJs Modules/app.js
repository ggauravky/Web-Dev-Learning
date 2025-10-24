//import the add function from the another file named math.js 
const { add } = require('./math');

// Use the add function
const result = add(5, 3);
console.log(`The sum is: ${result}`);