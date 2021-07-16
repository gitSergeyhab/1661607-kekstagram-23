import {createPicture} from './create-picture.js';

const picture = document.querySelector('.pictures');

const cleanPictures = () => {
  const pictures = picture.querySelectorAll('a.picture'); // pictures искать только при выполнении ф-ции, изначально на странице их нет
  pictures.forEach((pic) => pic.remove());
};

const createPictureFragment = (pics) => {
  const fragmentPictures = document.createDocumentFragment();
  pics.forEach((pic) => fragmentPictures.append(createPicture(pic)));
  cleanPictures();
  return fragmentPictures;
};

const addPictureFragment = (response) => picture.append(response);

export {createPictureFragment, addPictureFragment};
