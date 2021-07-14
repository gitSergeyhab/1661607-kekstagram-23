import {closeModalForm, closeModalFormClases} from './show-modal-form.js';
import {uploadFile} from './form.js';

const footer = document.querySelector('.page-footer');
const successMessageBlock = document.querySelector('#success').content.querySelector('.success');
const errorMessageBlock = document.querySelector('#error').content.querySelector('.error');

const showGetErrorMessage = () => {
  const div = document.createElement('div');
  div.textContent = 'ALL IS DEAD!!!';
  div.style.color = 'red';
  div.style.textAlign = 'center';
  footer.prepend(div);
  setTimeout(() => div.remove(), 2000);
};

let closePopup; // об.явить до использования
const showPostMessage = (block, clear = true) => {
  clear ? closeModalForm() : closeModalFormClases(); uploadFile.value = ''; // очистиь поля : или просто скрыть и очистить файловый инпут


  document.body.append(block);

  const onClickClosePopup = () => closePopup();
  const onEscClosePopup = () => closePopup();

  document.addEventListener('click', onClickClosePopup);
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      onEscClosePopup();
    }
  });

  closePopup = () => {
    block.remove();
    document.removeEventListener('click', onClickClosePopup);
    document.removeEventListener('keydown', onEscClosePopup);
  };
};

const showPostSuccessMessage = () => showPostMessage(successMessageBlock);
const showPostErrorMessage = () => showPostMessage(errorMessageBlock, false);


export {showGetErrorMessage, showPostSuccessMessage, showPostErrorMessage};
