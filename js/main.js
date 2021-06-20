import {createPictureFragment} from './modules/create-picture-fragment.js';
import {showFullScreenImg} from './modules/show-full-screen-img.js';
import {hangCloseHandler} from './modules/close-modal.js';

const picture = document.querySelector('.pictures');
picture.append(createPictureFragment());

picture.addEventListener('click', (evt) => {
  evt.preventDefault();
  const needTarget = evt.target.closest('a.picture');
  if (needTarget) {
    showFullScreenImg(needTarget.dataset.id);
    document.body.classList.add('modal-open');
    hangCloseHandler();
  }
});
