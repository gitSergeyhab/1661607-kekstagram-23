
import {validateForm} from './modules/validate-form.js';
import {createPictureFragment, addPictureFragment} from './modules/create-picture-fragment.js';
import { getData, postData } from './modules/api.js';
import {showModalForm} from './modules/show-modal-form.js';
import {showBigImg} from './modules/show-big-img.js';
import {changeImgSize} from './modules/scale-image.js';
import {showFilter, markerFilters, imgFilters, sortByComment} from './modules/filter.js';

import { form } from './modules/form.js';
import {showGetErrorMessage, showPostSuccessMessage, showPostErrorMessage} from './modules/message.js';
import './modules/slider.js';

import {getRandomArrayNoRepeat} from './modules/util.js';
import {showChosenImg} from './modules/image.js';


const defaultOption = (res) => res;

const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
const filterDiscussed = imgFilters.querySelector('#filter-discussed');


markerFilters();

const getOptionData = (optionCb = defaultOption) => {
  getData()
    .then(optionCb)
    .then(createPictureFragment)
    .then(addPictureFragment)
    .then(showFilter)
    .catch(showGetErrorMessage);
};

filterDefault.addEventListener('click', () => getOptionData());

filterRandom.addEventListener('click', () => getOptionData(getRandomArrayNoRepeat));

filterDiscussed.addEventListener('click', () => getOptionData(sortByComment));

getOptionData();


showModalForm();
validateForm();
showBigImg();
changeImgSize();


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(form, showPostSuccessMessage, showPostErrorMessage);
});

showChosenImg();
