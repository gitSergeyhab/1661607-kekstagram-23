import {createPictureFragment} from './modules/create-picture-fragment.js';
import {showFullScreenImg} from './modules/show-full-screen-img.js';
import {hangCloseHandler} from './modules/close-modal.js';
import {validateForm} from './modules/validate-form.js';

const picture = document.querySelector('.pictures');
picture.append(createPictureFragment());

picture.addEventListener('click', (evt) => {
  const needTarget = evt.target.closest('a.picture');
  if (needTarget) {
    evt.preventDefault();
    showFullScreenImg(needTarget.dataset.id);
    document.body.classList.add('modal-open');
    hangCloseHandler();
  }
});

validateForm();
