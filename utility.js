// Capitalize first letter of a string
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// ===== Function Expressions =====

// Format number as currency
const formatCurrency = function(amount, currency = "₹") {
    return `${currency}${amount.toFixed(2)}`;
};

// Round a number to nearest integer
const roundNumber = function(num) {
    return Math.round(num);
};

// ===== Arrow Functions =====

// Check if a string is a valid email
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Check if a value is a number
const isNumber = (value) => typeof value === "number" && !isNaN(value);

// ===== Example Usage =====
console.log(capitalize("suresh"));       // Suresh 
console.log(reverseString("hello"));     // olleh
console.log(formatCurrency(1234.567));   // ₹1234.57
console.log(roundNumber(4.7));           // 5
console.log(isValidEmail("test@gmail.com")); // true
console.log(isNumber("123"));            // false
console.log(isNumber(123));              // true