/*
// const moreNumbers = new Array("Hi!");
const yetMoreNumbers = Array.from("Hi!");
console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// const arrayListItems = Array.from(listItems); // useful for converting array-like or iterable objects to real arrays.
// console.log(arrayListItems);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // adds an item at the end of an array
// hobbies.unshift("Coding"); //add an item at the start of an array
// const poppedValue = hobbies.pop(); // pop() removes the last item in an array and returns it.
// hobbies.shift(); // removes an item at the start of an array
// // console.log(poppedValue);

// hobbies.splice(1, 0, "JS", "CSS"); //also returns deleted items
// console.log(hobbies);

function transformToObject(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}

console.log(transformToObject([10, 20, 30]));

//  the ...spread oprator
// pulls out all the elements of  an array and gives them to you as a standalone fragments.

const nameList = ["Luke", "Trevor", "Odhiambo"];

const copiedNameList = [...nameList];
console.log(copiedNameList);

const ids = new Set(); // to manage unique data
for (const entry of ids.entries()) {
  console.log(entry[0]);
}

const person = { name: "Luke" };
const person2 = { name: "Odhiambo" };

// use maps if you want tot attach extra information to each object but don't want to merge it to the object

const personData = new Map([[person, [{ date: "Yesterday", price: 10 }]]]); // It's an array of array because each array in that array is one key-value

let user = { name: "Luke" };
const users = new WeakSet();
console.log(users.add(user));

*/

// Task 1
const numbers = [2, 3, 4, 5, 6, 7, 9, 10];

function greaterThan5(array) {
  return array.filter((number) => number > 5);
}
const object = numbers.map((value) => ({ num: value }));
const multiply = numbers.reduce((previous, current) => {
  return previous * current;
}, 1);

console.log(greaterThan5(numbers));
console.log(object);
console.log(multiply);

// Task 2 and 3

function findMax(...args) {
  let max = args[0]; //assume first argument is the maximum number
  for (const num of args) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax(...numbers));

function findMinMax(...args) {
  let max = args[0];
  let min = args[0];
  for (const num of args) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [min, max];
}

const [minValue, maxValue] = findMinMax(...numbers); //destructuring

console.log(minValue, maxValue);

// Task 4

const userIds = new Set();
userIds.add(10, 20, "String", -5, -5);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
