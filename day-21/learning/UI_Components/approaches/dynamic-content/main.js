// class is created to make a new modal reusable when interacted

class DynamicModal {
    constructor({ modalId, overlayId }) {
      this.modal = document.getElementById(modalId);
      this.overlay = document.getElementById(overlayId);
      this.closeBtn = this.modal.querySelector('.close-button');
      this.contentContainer = this.modal.querySelector('.modal-content');
      this.init();
    }
  
    init() {
      this.closeBtn.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  
    open(content) {
      this.contentContainer.innerHTML = content; // Render dynamic content
      this.modal.style.display = 'block';
      this.overlay.style.display = 'block';
    }
  
    close() {
      this.modal.style.display = 'none';
      this.overlay.style.display = 'none';
    }
  }
  
  // Usage Example
  const myDynamicModal = new DynamicModal({ modalId: 'myModal', overlayId: 'overlay' });
  document.getElementById('openModalBtn').addEventListener('click', () => {
    const dynamicContent = `<h2>Dynamic Content Modal</h2><p>This content was injected dynamically!</p>`;
    myDynamicModal.open(dynamicContent);
  });