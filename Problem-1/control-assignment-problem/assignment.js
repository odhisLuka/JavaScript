const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert(`${randomNumber} is greater than 0.7`);
  }

// assignment #2
const myNumList = [11, 20, 33, 41, 51];

for (const num of myNumList) {
  console.log(num);
}

for (let i = 0; i <= myNumList.length; i++) {
  console.log(myNumList[i]);
}

let counter = 0;
while (counter < myNumList.length) {
  console.log(myNumList[counter]);
  counter++;
}

// assignment #3 - backwards

for (let i = myNumList.length; i >= 0; i--) {
  console.log(myNumList[i]);
}

// assignment #4
const randomNumber2 = math.random();

console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("Both greater than 0.7 or at least one is smaller than 0.2.");
}