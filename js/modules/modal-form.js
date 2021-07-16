import {form, commentArea, imgOverlay, btnCloseModal, uploadFile} from './form.js';
import {KEYCODE_ESC, classes} from './setup.js';
import {setDefaultImgScale} from './scale-image.js';
import {setDefaultEffect} from './slider.js';

// сделал так, чтобы не ругался линтер и чтобы не нарушать критерий - не использовать разные способы объявления ф-ций:
const modalMethods = {};

const onCloseBtnForm = (evt) => {
  evt.preventDefault();
  modalMethods.close();
};

const onEscForm = (evt) => {
  if(evt.keyCode === KEYCODE_ESC && commentArea !== document.activeElement) {
    modalMethods.close();
  }
};

modalMethods.open = () => {
  setDefaultEffect();
  imgOverlay.classList.remove(classes.hide);
  document.body.classList.add(classes.open);
  btnCloseModal.addEventListener('click', onCloseBtnForm);
  document.addEventListener('keydown', onEscForm);
};

const closeModalFormClasses = () => {
  imgOverlay.classList.add(classes.hide);
  document.body.classList.remove(classes.open);
};

modalMethods.close = () => {
  setDefaultEffect();
  setDefaultImgScale();
  closeModalFormClasses();
  btnCloseModal.removeEventListener('click', onCloseBtnForm);
  document.removeEventListener('keydown', onEscForm);
  form.reset();
};

const showModalForm = () => {
  uploadFile.addEventListener('change', () => {
    modalMethods.open();
  });
};

export {showModalForm, modalMethods, closeModalFormClasses};
