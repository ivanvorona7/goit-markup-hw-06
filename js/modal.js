(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-popup-close]'),
    modal: document.querySelector('[data-popup]'),
  };

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();