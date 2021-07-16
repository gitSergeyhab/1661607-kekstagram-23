import {createFullScreenImg} from './create-full-screen-img.js';
import {KEYCODE_ESC, classes} from './setup.js';

let closeBigImgModal; // переопределю
const showBigImg = () => {
  const bigPicture = document.querySelector('.big-picture');
  const picture = document.querySelector('.pictures');
  const btnCloseModal = document.querySelector('.big-picture__cancel');

  const onClickCloseBtn = (evt) => {
    evt.preventDefault();
    closeBigImgModal();
  };

  const onModalEsc = (evt) => {
    if (evt.keyCode === KEYCODE_ESC) {
      closeBigImgModal();
    }
  };

  const openBigImgModal = () => {
    document.body.classList.add(classes.open);
    bigPicture.classList.remove(classes.hide);
    document.addEventListener('keydown', onModalEsc);
    btnCloseModal.addEventListener('click', onClickCloseBtn);
  };

  closeBigImgModal = () => {
    document.body.classList.remove(classes.open);
    bigPicture.classList.add(classes.hide);
    document.removeEventListener('keydown', onModalEsc);
    btnCloseModal.removeEventListener('click', onClickCloseBtn);
  };

  picture.addEventListener('click', (evt) => {
    const target = evt.target.closest('.picture');
    if (target) {
      createFullScreenImg(target.dataset.id) // обновляю скрытую картинку и ...
        .then(openBigImgModal); //...и открываю только после ее обновления
    }
  });
};

export {showBigImg};
