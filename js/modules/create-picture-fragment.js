import {createPicture} from './create-picture.js';

const picture = document.querySelector('.pictures');

const createPictureFragment = (responses) => {
  const fragmentPuctures = document.createDocumentFragment();
  responses.forEach((discription) => fragmentPuctures.append(createPicture(discription)));
  picture.append(fragmentPuctures);
};

export {createPictureFragment};
