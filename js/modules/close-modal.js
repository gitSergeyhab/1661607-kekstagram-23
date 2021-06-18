const closeModal = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

const btnCloseModal = document.querySelector('.big-picture__cancel');
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 && document.body.classList.contains('modal-open')) {
    closeModal();
  }
});
