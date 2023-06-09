// var name = 'Odhiambo';
// // var name = 'Trevor'; 
// // this will not throw an error as opposed to when you redeclare a variable with "let"

// if (name === 'Odhiambo') {
//   var hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);
// }

// function greet() {
//   var name = 'Luke'
//   console.log("Hi,", name + '?');
// }

// console.log(name, hobbies);

// greet();
// note: Don't use let in ES6 modern JS


console.log(userName);
var userName = 'Luke'; // this logs 'undefined' in Chrome console. 

// Let & const will log an error. So, why is that?
// const and let don't work like var when it comes to hoisting (this example would've worked with var).


// Hoisiting; JS behavior of moving declarations to the top
// a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// what JS does, is it initially pulls the var variable 
// to the top/beginning of your file as follows:

'use strict'; // JavaScript will activate the strict mode for the script when you add this at the top

var userName;

console.log(userName);

userName = 'Luke'; // leaves your initialization/where you assigned a value/where you wrote the code down.

// so initiliaze before you log
