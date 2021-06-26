/* eslint-disable no-use-before-define */

import {form, commentArea, imgOverlay, btnCloseModal, uploadFile} from './form.js';

const showModalForm = () => {
  const onCloseBtnForm = (evt) => {
    evt.preventDefault();
    closeModalForm();
  };

  const onEscForm = (evt) => {
    if(evt.keyCode === 27 && commentArea !== document.activeElement) {
      closeModalForm();
    }
  };

  function openModalForm() {
    imgOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    btnCloseModal.addEventListener('click', onCloseBtnForm);
    document.addEventListener('keydown', onEscForm);
  }

  function closeModalForm() {
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    btnCloseModal.removeEventListener('click', onCloseBtnForm);
    document.removeEventListener('keydown', onEscForm);
    form.reset();
  }

  uploadFile.addEventListener('change', () => {
    openModalForm();
  });

  form.addEventListener('submit', () => {
    // evt.preventDefault();
    setTimeout(() => form.reset(), 0);// чтоб сбросить значения в форме уже после отправки на сервер
  });
};

export {showModalForm};
