
import {validateForm} from './modules/validate-form.js';
import {closeModalForm} from './modules/close-modal-form.js';
import {createPictureFragment} from './modules/create-picture-fragment.js';
import{showBigImg} from './modules/show-big-img.js';


const picture = document.querySelector('.pictures');
picture.append(createPictureFragment());

closeModalForm();
validateForm();
showBigImg();
