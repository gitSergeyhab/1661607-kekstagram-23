
import {validateForm} from './modules/validate-form.js';
import {createPictureFragment} from './modules/create-picture-fragment.js';
import { getData, postData } from './modules/api.js';
import {showModalForm} from './modules/show-modal-form.js';
import {showBigImg} from './modules/show-big-img.js';
import {changeImgSize} from './modules/scale-image.js';

import { form } from './modules/form.js';
import {showGetErrorMessage, showPostSuccessMessage, showPostErrorMessage} from './modules/message.js';
import './modules/slider.js';

getData()
  .then(createPictureFragment)
  .catch(showGetErrorMessage);

showModalForm();
validateForm();
showBigImg();
changeImgSize();


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(form, showPostSuccessMessage, showPostErrorMessage);
});
