const form = document.querySelector('.img-upload__form');
const imgOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const btnCloseModal = form.querySelector('.img-upload__cancel');
const commentArea = form.querySelector('.text__description');
const hashTagInput = form.querySelector('.text__hashtags');

export {form, commentArea, imgOverlay, btnCloseModal, uploadFile, hashTagInput};
