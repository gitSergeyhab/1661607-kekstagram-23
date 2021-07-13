const SCALE_CHANGE = 25;
const state = {
  scale: 100,
};

const imgScaleFieldset = document.querySelector('.img-upload__scale');
const scalePlus = imgScaleFieldset.querySelector('.scale__control--bigger');
const scaleMinus = imgScaleFieldset.querySelector('.scale__control--smaller');
const scaleValueField = imgScaleFieldset.querySelector('.scale__control--value');
const uploadDivImg = document.querySelector('.img-upload__preview');

const setScaleValue = (scale) => scaleValueField.value = `${scale}%`;

const setScaleImg = (scale) => uploadDivImg.style.transform = `scale(${scale/100})`;

const changeScaleValue = (sign) => {
  state.scale += (sign * SCALE_CHANGE);
  setScaleValue(state.scale);
};

const changeImgSize = () => {
  scaleMinus.addEventListener('click', () => {
    if (state.scale > 25) {
      changeScaleValue(-1);
      setScaleImg(state.scale);
    }
  });

  scalePlus.addEventListener('click', () => {
    if (state.scale < 76) {
      changeScaleValue(1);
      setScaleImg(state.scale);
    }
  });
};

export {changeImgSize, setScaleValue, setScaleImg, state};
