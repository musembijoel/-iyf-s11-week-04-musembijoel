function removeDuplicatesWithFilter(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

const input2 = [1, 2, 2, 3, 4, 4, 5];
console.log("Using Filter:", removeDuplicatesWithFilter(input2)); 
// Output: [1, 2, 3, 4, 5]
