function sum(a, b) {
    let result;           // Code Smell 1: unused variable
    return a + b;
}

function unusedFunction() { // Code Smell 2: function ไม่ถูกเรียก
    console.log("This function is never called");
}

module.exports = { sum, unusedFunction };
