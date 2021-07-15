import {createPicture} from './create-picture.js';

const picture = document.querySelector('.pictures');

const cleanPictures = () => {
  const pictures = picture.querySelectorAll('a.picture'); // pictures искать только при выполнении ф-ции, изначально на странице их нет
  pictures.forEach((pic) => pic.remove());
};

const createPictureFragment = (responses) => {
  const fragmentPuctures = document.createDocumentFragment();
  responses.forEach((discription) => fragmentPuctures.append(createPicture(discription)));
  cleanPictures();
  return fragmentPuctures;
};

const addPictureFragment = (response) => picture.append(response);

export {createPictureFragment, addPictureFragment};
