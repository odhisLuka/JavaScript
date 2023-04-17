// const taskOne = document.querySelector('li');
const taskOne = document.getElementById('task-1');

taskOne.style.color = 'white';
taskOne.style.backgroundColor = 'black';

const docTitle = document.querySelector('title');
// docTitle.textContent = 'Assignment - Solved!';

const docTitle1 = document.head.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!'