const h1 = document.getElementById('main-title');

h1.textContent = "Some new title";
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const Li = document.querySelector('li:last-of-type');
Li.textContent = Li.textContent + ' Changed!';

//const listItemElements = document.querySelectorAll(li);
const listItemElements = document.getElementsByTagName('li');

for (liItemEl of listItemElements) {
  console.dir(liItemEl);
} 
