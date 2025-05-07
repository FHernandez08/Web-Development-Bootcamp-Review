// selects element by choosing either class or id
const element = document.querySelector('.item');

// selects element by id attribute
const id_element = document.getElementById('hello');

// selects element by class attribute
const class_element = window.document.getElementsByClassName('name');


id_element.innerHTML = "<h3>Welcome to my page!</h3>"
element.textContent = 'Goodbye!'

const no_attr = document.querySelector('h2');
no_attr.setAttribute('id', 'question');

// event listeners
let myBtn = document.querySelector('.test');
myBtn.addEventListener('click', function() {
    alert("The button has been clicked!");
});