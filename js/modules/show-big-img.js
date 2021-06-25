/* eslint-disable no-use-before-define */

import {createFullScreenImg} from './create-full-screen-img.js';

const showBigImg = () => {
  const bigPicture = document.querySelector('.big-picture');
  const picture = document.querySelector('.pictures');
  const btnCloseModal = document.querySelector('.big-picture__cancel');

  const onClickCloseBtn = (evt) => {
    evt.preventDefault();
    closeBigImgModal();
  };

  const onModalEsc = (evt) => {
    if (evt.keyCode === 27) {
      closeBigImgModal();
    }
  };

  function openBigImgModal() {
    document.body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onModalEsc);
    btnCloseModal.addEventListener('click', onClickCloseBtn);
  }

  function closeBigImgModal() {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onModalEsc);
    btnCloseModal.removeEventListener('click', onClickCloseBtn);
  }

  picture.addEventListener('click', (evt) => {
    const target = evt.target.closest('.picture');
    if (target) {
      createFullScreenImg(target.dataset.id);
      openBigImgModal();
    }
  });
};

export {showBigImg};
