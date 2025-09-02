function sum(a, b) {
    return a + b;
}

function unusedFunction() { // Code Smell: function ไม่ถูกเรียก
    console.log("This function is never called");
}

function multiply(a, b) {
    return a + b; // Bug: logic ผิด (จริง ๆ ต้อง a * b)
}

module.exports = { sum, multiply };
