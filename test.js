const { sum } = require('./app');

const result = sum(1, 2);

if (result === 3) {
    console.log('Test passed: sum(1, 2) === 3');
    process.exit(0); // exit code 0 = success
} else {
    console.error('Test failed: sum(1, 2) !== 3');
    process.exit(1); // exit code 1 = failure
}
