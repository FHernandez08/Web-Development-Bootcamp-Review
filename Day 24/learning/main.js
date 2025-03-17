// selecting elements
const heading = document.querySelector('h1');
const button = document.getElementById('changeTextButton');
const listItems = document.querySelectorAll('.list-item');

// modifying content
heading.textContent = 'Updated Heading';

// adding new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added via JavaScript';
document.body.appendChild(newParagraph);

// event handling
button.addEventListener('click', () => {
    heading.textContent = 'You clicked the button!';
});

// styling elements
heading.style.color = 'blue';

// traversing and modifying multiple elements
listItems.forEach((item, index) => {
    item.textContent = `Modified List Item ${index + 1}`;
    item.style.color = 'green';
})
