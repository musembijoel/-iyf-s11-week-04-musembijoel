// 1. Core Mathematical Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

const modulus = (a, b) => {
    if (b === 0) {
        throw new Error("Modulus by zero is not allowed.");
    }
    return a % b;
};

const power = (a, b) => a ** b;

// 2. Main Calculate Function
function calculate(num1, operator, num2) {
    // Convert inputs to numbers to ensure precision
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return "Error: Invalid numeric input.";
    }

    try {
        switch (operator) {
            case '+':
                return add(n1, n2);
            case '-':
                return subtract(n1, n2);
            case '*':
                return multiply(n1, n2);
            case '/':
                return divide(n1, n2);
            case '%':
                return modulus(n1, n2);
            case '**':
                return power(n1, n2);
            default:
                return `Error: Unknown operator "${operator}". Use +, -, *, /, %, or **.`;
        }
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// 3. Examples / Testing in Console
console.log("--- Calculator Tests ---");
console.log("Addition (10 + 5):", calculate(10, '+', 5));
console.log("Subtraction (10 - 5):", calculate(10, '-', 5));
console.log("Multiplication (10 * 5):", calculate(10, '*', 5));
console.log("Division (10 / 2):", calculate(10, '/', 2));
console.log("Modulus (10 % 3):", calculate(10, '%', 3));
console.log("Power (2 ** 3):", calculate(2, '**', 3));

console.log("\n--- Error Handling Tests ---");
console.log("Division by Zero (10 / 0):", calculate(10, '/', 0));
console.log("Modulus by Zero (10 % 0):", calculate(10, '%', 0));
console.log("Invalid Operator (10 x 5):", calculate(10, 'x', 5));
