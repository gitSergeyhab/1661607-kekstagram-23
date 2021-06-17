import {createPicture} from './create-picture.js';
import {createPhotoDiscriptions} from './create-photo-discriptions.js';


const createPictureFragment = () => {
  const fragmentPuctures = document.createDocumentFragment();
  const photoDiscriptions = createPhotoDiscriptions();
  photoDiscriptions.forEach((pd) => fragmentPuctures.append(createPicture(pd)));
  return fragmentPuctures;
};

export {createPictureFragment};
