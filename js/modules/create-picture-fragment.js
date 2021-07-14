import {createPicture} from './create-picture.js';
import {createPhotoDiscriptions} from './create-photo-discriptions.js';

// const createPictureFragment = () => {
//   const fragmentPuctures = document.createDocumentFragment();
//   photoDiscriptions.forEach((discription) => fragmentPuctures.append(createPicture(discription)));
//   return fragmentPuctures;
// };

const picture = document.querySelector('.pictures');
// picture.append(x);

const createPictureFragment = (responses) => {
  const fragmentPuctures = document.createDocumentFragment();
  responses.forEach((discription) => fragmentPuctures.append(createPicture(discription)));
  picture.append(fragmentPuctures);
  // return fragmentPuctures;
};

export {createPictureFragment};
