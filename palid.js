function isPalindromeMethods(str) {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isPalindromeMethods("racecar"));                     // true
console.log(isPalindromeMethods("hello"));                       // false
console.log(isPalindromeMethods("A man a plan a canal Panama")); // true
