// Get Elements
const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const myModal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');

// Function to Open Modal
function openModal() {
    myModal.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to Close Modal
function closeModal() {
    myModal.style.display = 'none';
    overlay.style.display = 'none';
}

// Event Listeners
openModalBtn.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Reusability Enhancement - Optional
export function showModal(content) {
    const contentContainer = myModal.querySelector('.modal-content');
    contentContainer.innerHTML = `<button class="close-button">X</button> ${content}`;
    openModal();
}