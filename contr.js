
//Print Numbers 1-100
console.log("--- 1. Numbers 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
  console.log(i);

//Print Only Even Numbers 1-50
console.log("\n--- 2. Even Numbers 1 to 50 ---");
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

//FizzBuzz (1-100)
console.log("\n--- 3. FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Print a Triangle of Stars
console.log("\n--- 4. Star Triangle ---");
const height = 5;
for (let i = 1; i <= height; i++) {
  console.log("*".repeat(i));
} 
*
**
***
****
*****
