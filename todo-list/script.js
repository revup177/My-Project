const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
// const newlist = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// };

//This bottom code is the same as the top, but better way to define function;

function newlist(newtext) {
  const li = document.createElement('li');
  li.textContent = newtext;
  ul.appendChild(li);
}

form.addEventListener('submit', function(i) {
  i.preventDefault();

  newlist(input.value);
  input.value = '';
});

//LOCAL STORAGE Manipulate

let itemsArray = [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


itemsArray.push(input.value);
localStorage.setItem('items', JSON.stringify(itemsArray));

data.forEach(item => {
  newlist(item);
});

button.addEventListener('click', function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
