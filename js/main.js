
import {validateForm} from './modules/validate-form.js';
import {postData} from './modules/api.js';
import {showModalForm} from './modules/show-modal-form.js';
import {showBigImg} from './modules/show-big-img.js';
import {changeImgSize} from './modules/scale-image.js';
import './modules/slider.js';
import {filter, getOptionalFilterData} from './modules/filter.js';
import {form} from './modules/form.js';
import {showPostSuccessMessage, showPostErrorMessage} from './modules/message.js';
import {showChosenImg} from './modules/image.js';


filter();
getOptionalFilterData();

showModalForm();
validateForm();
showBigImg();
changeImgSize();

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(form, showPostSuccessMessage, showPostErrorMessage);
});

showChosenImg();
