var name = 'Odhiambo';
// var name = 'Trevor'; // this will not throw an error as opposed to when you redeclare a variable with "let"

if (name === 'Odhiambo') {
  var hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  var name = 'Luke'
  console.log("Hi,", name + '?');
}

console.log(name, hobbies);

greet();
// note: Don't use let in ES6 modern JS