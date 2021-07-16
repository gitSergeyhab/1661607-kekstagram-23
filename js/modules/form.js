const form = document.querySelector('.img-upload__form');
const imgOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const btnCloseModal = form.querySelector('.img-upload__cancel');
const commentArea = form.querySelector('.text__description');
const hashTagInput = form.querySelector('.text__hashtags');
const uploadSubmit = form.querySelector('#upload-submit');

export {form, imgOverlay, btnCloseModal, uploadFile, commentArea, hashTagInput, uploadSubmit};
