const btnCloseModal = document.querySelector('.big-picture__cancel');
const onModalClose = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  btnCloseModal.removeEventListener('click', onModalClose);
  document.removeEventListener('keydown', onModalClose);
};

const hangCloseHandler = () => {
  btnCloseModal.addEventListener('click',  onModalClose);
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 /*след условие можно удалить*/&& document.body.classList.contains('modal-open')) {
      onModalClose();
    }
  });
};

export {hangCloseHandler};
