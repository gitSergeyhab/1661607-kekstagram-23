/* eslint-disable no-use-before-define */

import {form, commentArea, imgOverlay, btnCloseModal, uploadFile} from './form.js';
import {KEYCODE_ESC} from './data.js';
import {setDefaultImgScale} from './scale-image.js';
import {setDefaultEffect} from './slider.js';

// imgOverlay.classList.remove('hidden');

const onCloseBtnForm = (evt) => {
  evt.preventDefault();
  closeModalForm();
};

const onEscForm = (evt) => {
  if(evt.keyCode === KEYCODE_ESC && commentArea !== document.activeElement) {
    closeModalForm();
  }
};

function openModalForm() {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  btnCloseModal.addEventListener('click', onCloseBtnForm);
  document.addEventListener('keydown', onEscForm);
}

const closeModalFormClases = () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

function closeModalForm() {
  setDefaultEffect();
  setDefaultImgScale();
  closeModalFormClases();
  btnCloseModal.removeEventListener('click', onCloseBtnForm);
  document.removeEventListener('keydown', onEscForm);
  form.reset();
}


const showModalForm = () => {
  uploadFile.addEventListener('change', () => {
    openModalForm();
  });
};

export {showModalForm, closeModalForm, closeModalFormClases};
