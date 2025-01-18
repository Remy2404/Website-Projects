'use strict';

try {
    // Replace 'Sok Dara' with your full name
    console.log('Student Name: Phon Ramy');
    x = 10; // ReferenceError: x is not defined
} catch (error) {
    console.error(error.message); // Output: "x is not defined"
}

function demo() { /* Show usages new* */
    try {
        y = 20; // ReferenceError: y is not defined
    } catch (error) {
        console.error(error.message); // Output: "y is not defined"
    }
}

demo();

try {
    eval('var z = 50; delete z;'); // TypeError: Cannot delete variable 'z'
} catch (error) {
    console.error(error.message); // Output: "Cannot delete variable 'z'"
}