import {createPicture} from './create-picture.js';
import {createPhotoDiscriptions} from './create-photo-discriptions.js';

const photoDiscriptions = createPhotoDiscriptions();

const createPictureFragment = () => {
  const fragmentPuctures = document.createDocumentFragment();
  photoDiscriptions.forEach((pd) => fragmentPuctures.append(createPicture(pd)));
  return fragmentPuctures;
};

export {createPictureFragment, photoDiscriptions};
