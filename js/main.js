
import {validateForm} from './modules/validate-form.js';
import {createPictureFragment} from './modules/create-picture-fragment.js';
import { getData } from './modules/api.js';
import {showModalForm} from './modules/show-modal-form.js';
import {showBigImg} from './modules/show-big-img.js';
import {changeImgSize} from './modules/scale-image.js';
import {showGetErrorMessage} from './modules/message.js';
import './modules/slider.js';

getData()
  .then(createPictureFragment)
  .catch(showGetErrorMessage);

showModalForm();
validateForm();
showBigImg();
changeImgSize();
// showGetErrorMessage()
