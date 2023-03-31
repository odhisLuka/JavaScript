const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
} // Using function as a declaration/function statement

startGameBtn.addEventListener('click', startGame);


// #1: STORE FUNCTIONS IN OBJECTS; METHOD.
// const person = {
//   name: 'Luke',
//   greet: function greet() {
//     console.log('Hi there!');
//   } // method; stores a function inside an object.
// }
// person.greet();


// #2: FUNCTIONS ARE OBJECTS
// console.dir(startGame);


// #3: STORE FUNCTIONS IN VARIABLES

// const start = function() {
//   console.log('Game is starting...');
// }; // we are using the function as an expression; an anonymous function that's not stored in global scope
// You can also omit the startGame, and end the func body with ;

startGameBtn.addEventListener('click', function startGame() {
  console.log('Game is starting...');
});
