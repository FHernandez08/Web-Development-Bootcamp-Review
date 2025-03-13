// does everything in one to do the action

class Modal {
    constructor({ modalId, overlayId }) {
      this.modal = document.getElementById(modalId);
      this.overlay = document.getElementById(overlayId);
      this.closeBtn = this.modal.querySelector('.close-button');
      this.init();
    }
  
    init() {
      // Close modal on button click or clicking overlay
      this.closeBtn.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());
  
      // Allow closing with the Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  
    open() {
      this.modal.style.display = 'block';
      this.overlay.style.display = 'block';
    }
  
    close() {
      this.modal.style.display = 'none';
      this.overlay.style.display = 'none';
    }
  }
  
  // Usage Example
  const myModal = new Modal({ modalId: 'myModal', overlayId: 'overlay' });
  document.getElementById('openModalBtn').addEventListener('click', () => myModal.open());