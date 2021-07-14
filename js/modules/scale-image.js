const SCALE_CHANGE = 25;
const DEFAULT_SCALE = 100;
const sizesForChange = {
  min: 25,
  max: 76,
};

let stateScale = 100;

const imgScaleFieldset = document.querySelector('.img-upload__scale');
const scalePlus = imgScaleFieldset.querySelector('.scale__control--bigger');
const scaleMinus = imgScaleFieldset.querySelector('.scale__control--smaller');
const scaleValueField = imgScaleFieldset.querySelector('.scale__control--value');
const uploadDivImg = document.querySelector('.img-upload__preview');

const setScaleValue = (scale) => scaleValueField.value = `${scale}%`;

const setScaleImg = (scale) => uploadDivImg.style.transform = `scale(${scale/100})`;

const changeScaleValue = (sign) => {
  stateScale += (sign * SCALE_CHANGE);
  setScaleValue(stateScale);
};

const changeImgSize = () => {
  scaleMinus.addEventListener('click', () => {
    if (stateScale > sizesForChange.max) {
      changeScaleValue(-1);
      setScaleImg(stateScale);
    }
  });

  scalePlus.addEventListener('click', () => {
    if (stateScale < sizesForChange.max) {
      changeScaleValue(1);
      setScaleImg(stateScale);
    }
  });
};

const setDefaultImgScale =  () => {
  stateScale = DEFAULT_SCALE;
  setScaleValue(stateScale);
  setScaleImg(stateScale);
};

export {changeImgSize, setDefaultImgScale};
