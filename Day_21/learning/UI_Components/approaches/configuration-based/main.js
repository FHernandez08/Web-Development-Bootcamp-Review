// function is created to make a create modal

function createModal({ triggerId, modalId, overlayId }) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById(overlayId);
    const closeBtn = modal.querySelector('.close-button');
  
    trigger.addEventListener('click', () => openModal());
    closeBtn.addEventListener('click', () => closeModal());
    overlay.addEventListener('click', () => closeModal());
  
    function openModal() {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  }
  
  // Usage Example
  createModal({ triggerId: 'openModalBtn', modalId: 'myModal', overlayId: 'overlay' });