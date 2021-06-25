import {form, commentArea, imgOverlay, btnCloseModal, btniUploadImgSubmit, uploadFile} from './form.js';

const closeModalForm = () => {
  const closeModal = () => {
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    btnCloseModal.removeEventListener('click', closeModal);
    btniUploadImgSubmit.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
    form.reset();
  };

  const onEscCloseModal = (evt) => {
    if (evt.keyCode === 27 && commentArea !== document.activeElement) {
      closeModal(); // закрыть попап по эскейпу, если нет фокуса на поле коментария
    }
  };

  const onBtnsCloseModal = () => {
    closeModal();
  };

  uploadFile.addEventListener('change', () => {
    imgOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    btnCloseModal.addEventListener('click', onBtnsCloseModal);
    btniUploadImgSubmit.addEventListener('click', onBtnsCloseModal);
    document.addEventListener('keydown', onEscCloseModal);
  });

  form.addEventListener('submit', () => {
    form.reset();
  });
};

export {closeModalForm};
