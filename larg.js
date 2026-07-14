// Your array of numbers
const numbers = [21, 9, 36, 41, 23, 8];

// ---The Classic for Loop
function findLargestWithLoop(arr) {
    if (arr.length === 0) return undefined;

    let largest = arr[0]; // Starts at 21

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Updates when it encounters 36, then 41
        }
    }

    return largest;
}

console.log("Largest (using Loop):", findLargestWithLoop(numbers)); 
// Output: 41


