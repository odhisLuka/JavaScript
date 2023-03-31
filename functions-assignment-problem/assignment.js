// task 1
const sayHello = name => console.log('Hi, ' + name);
sayHello('Luke');

// //task 2
const sayHello1 = (greeting, name) => console.log(greeting + name);
sayHello1('Hello, ', 'Cecil');

const sayHello2 = () => console.log('Hey, Ezra');
sayHello2();

const sayHello3 = name => 'Hi, ' + name;
console.log(sayHello3('Josephine'));

//task 3

const sayHello4 = (greeting, name = 'Apollo') => console.log(greeting + name);
sayHello4('Hi, ');
sayHello4('Greetings, ', 'Josephine');

// task 4
function checkInput(cb, ...strings) {
  let isEmptyString = false;
  for (const text of strings) {
    if (!text) {
      isEmptyString = true;
      break;
    }
  }
  if (isEmptyString) {
    cb();
  }
}

checkInput(
  () => { // callback function to be executed if string is empty
    console.log("isn't empty");
  },
  "Hey,",
  "Luke.",
  "You have got a good",
  "name"
);
