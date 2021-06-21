import {form, commentArea, imgOverlay, btnCloseModal, btniUploadImgSubmit, uploadFile} from './form.js';

const closeModalForm = () => {
  const closeModal = () => {
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    btnCloseModal.removeEventListener('click', closeModal);
    btniUploadImgSubmit.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
  };

  uploadFile.addEventListener('change', () => {
    imgOverlay.classList.remove('hidden');
    btnCloseModal.addEventListener('click', closeModal);
    btniUploadImgSubmit.addEventListener('click', closeModal);
    document.body.classList.add('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 && commentArea !== document.activeElement) {
      closeModal(); // закрыть попап по эскейпу, если нет фокуса на поле коментария
    }
  });

  form.addEventListener('submit', () => {
    setTimeout(() => uploadFile.value = null, 0);
  });
};

export {closeModalForm};
