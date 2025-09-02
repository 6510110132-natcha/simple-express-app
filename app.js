function sum(a, b) {
    let result;           // Code Smell 1: unused variable
    let temp;             // Code Smell 2: unused variable
    return a + b;
}

// ฟังก์ชัน multiply เป็น Bug ตัวอย่าง (optional)
function multiply(a, b) {
    return a + b; // จริง ๆ ต้องเป็น a * b
}

module.exports = { sum, multiply };