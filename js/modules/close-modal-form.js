import {form, commentArea, imgOverlay, btnCloseModal, btniUploadImgSubmit, uploadFile} from './form.js';

const closeModalForm = () => {
  const closeModal = () => {
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    btnCloseModal.removeEventListener('click', closeModal);
    btniUploadImgSubmit.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
  };

  const onEscCloseModal = (evt) => {
    if (evt.keyCode === 27 && commentArea !== document.activeElement) {
      closeModal(); // закрыть попап по эскейпу, если нет фокуса на поле коментария
    }
  };

  const onBstnCloseModal = closeModal;

  uploadFile.addEventListener('change', () => {
    imgOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    btnCloseModal.addEventListener('click', onBstnCloseModal);
    btniUploadImgSubmit.addEventListener('click', onBstnCloseModal);
    document.addEventListener('keydown', onEscCloseModal);
  });

  form.addEventListener('submit', () => {
    setTimeout(() => uploadFile.value = null, 0);
  });
};

export {closeModalForm};
