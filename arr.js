// Your array of numbers
const numbers = [4, -6, 9, 11, 16, -3, 7];

//Double all numbers in an array
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);
// Output: [8, -12, 18, 22, 32, -6, 14]


//Filter out negative numbers
const positives = numbers.filter(num => num >= 0);
console.log("Positives only:", positives);
// Output: [4, 9, 11, 16, 7]


//Find the first number greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First number > 10:", firstGreaterThanTen);
// Output: 11 (Even though 16 is also > 10, 11 comes first)


//Calculate the product of all numbers
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log("Product of all numbers:", product);
// Output: 33264
