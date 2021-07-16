import {modalMethods, closeModalFormClasses} from './modal-form.js';
import {uploadFile} from './form.js';
import {KEYCODE_ESC} from './setup.js';

const footer = document.querySelector('.page-footer');
const successMessageBlock = document.querySelector('#success').content.querySelector('.success');
const errorMessageBlock = document.querySelector('#error').content.querySelector('.error');

const messageStyles = {
  textContent: 'ВСЁ ПРОПАЛО',
  fontSize: '2.5rem',
  color: 'red',
  textAlign: 'center',
};

const MESSAGE_LIVE_TIME = 2222;

const showGetErrorMessage = () => {
  const div = document.createElement('div');
  div.textContent = messageStyles.textContent;
  div.style.fontSize = messageStyles.fontSize;
  div.style.color = messageStyles.color;
  div.style.textAlign = messageStyles.textAlign;
  footer.prepend(div);
  setTimeout(() => div.remove(), MESSAGE_LIVE_TIME);
};

let closePopup; // обЪявить до использования
const showPostMessage = (block, clear = true) => {
  clear ? modalMethods.close() : closeModalFormClasses(); uploadFile.value = ''; // очистиь поля : или просто скрыть и очистить файловый инпут

  document.body.append(block);

  const onClickClosePopup = () => closePopup();
  const onEscClosePopup = () => closePopup();

  document.addEventListener('click', onClickClosePopup);
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEYCODE_ESC) {
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
