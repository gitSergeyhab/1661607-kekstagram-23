const SCALE_CHANGE = 25;
let scaleValue = 100;

const imgScaleFieldset = document.querySelector('.img-upload__scale');
const scalePlus = imgScaleFieldset.querySelector('.scale__control--bigger');
const scaleMinus = imgScaleFieldset.querySelector('.scale__control--smaller');
const scaleValueField = imgScaleFieldset.querySelector('.scale__control--value');
const uploadImg = document.querySelector('.img-upload__preview');

const setScaleValue = () => scaleValueField.value = `${scaleValue}%`;

const changeScaleValue = (sign) => {
  scaleValue += (sign * SCALE_CHANGE);
  setScaleValue();
};

const changeScaleImg = () => uploadImg.style.transform = `scale(${scaleValue/100})`;

const changeImgSize = () => {
  scaleMinus.addEventListener('click', () => {
    if (scaleValue > 25) {
      changeScaleValue(-1);
      changeScaleImg();
    }
  });

  scalePlus.addEventListener('click', () => {
    if (scaleValue < 76) {
      changeScaleValue(1);
      changeScaleImg();
    }
  });
  // const forms = document.forms;
  // Array.from(forms).forEach(f => {
  //   const ins = f.querySelectorAll('input');
  //   ins.forEach(inp => console.log(inp));
  // })
};


export {changeImgSize, setScaleValue};
