for (let i = 1; i <= 100; i++) {
    //Check if the number is a multiple of BOTH 3 and 5 first.
    // If we checked for 3 or 5 individually first, "FizzBuzz" would never run.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    //Check if it's only a multiple of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    //Check if it's only a multiple of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    //If it's none of the above, just print the number
    else {
        console.log(i);
    }
}
