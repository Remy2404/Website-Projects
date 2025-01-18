// What is a closure in JavaScript.js

function createCounter() {
    let count = 0; // This variable is part of the lexical scope of createCounter.

    return function() {
        // This inner function forms a closure.

        // Replace 'Sok Bara' with your full name
        console.log('Student Name: Phon Ramy');

        count++;
        // It remembers and accesses the count variable from its parent's scope.
        return count;
    };
}

// Create a counter instance  
const counter = createCounter();

console.log(counter()); // Output: Student Name: Phon Ramy, 1
console.log(counter()); // Output: Student Name: Phon Ramy, 2
console.log(counter()); // Output: Student Name: Phon Ramy, 3