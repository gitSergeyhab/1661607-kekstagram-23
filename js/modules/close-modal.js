const btnCloseModal = document.querySelector('.big-picture__cancel');
const onModalClose = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

const removeCloseHandler = () => {
  btnCloseModal.removeEventListener('click', onModalClose);
  document.removeEventListener('keydown', onModalClose);
};

const hangCloseHandler = () => {
  btnCloseModal.addEventListener('click', () => {
    onModalClose();
    removeCloseHandler();
  } );
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 && document.body.classList.contains('modal-open')) {
      onModalClose();
      removeCloseHandler();
    }
  });
};

export {hangCloseHandler};

