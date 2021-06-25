
import {validateForm} from './modules/validate-form.js';
import {createPictureFragment} from './modules/create-picture-fragment.js';
import {showModalForm} from './modules/show-modal-form.js';
import{showBigImg} from './modules/show-big-img.js';


const picture = document.querySelector('.pictures');
picture.append(createPictureFragment());

showModalForm();
validateForm();
showBigImg();
