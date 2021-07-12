import {createPicture} from './create-picture.js';
import {createPhotoDiscriptions} from './create-photo-discriptions.js';

const photoDiscriptions = createPhotoDiscriptions();

const createPictureFragment = () => {
  const fragmentPuctures = document.createDocumentFragment();
  photoDiscriptions.forEach((discription) => fragmentPuctures.append(createPicture(discription)));
  return fragmentPuctures;
};

export {createPictureFragment, photoDiscriptions};
