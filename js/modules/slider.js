
const splitEffect = 'effect-';
const addedEffect = 'effects__preview--';
const defaultStyleImg = 'effects__preview--none';
const defaultEffectId = 'effect-none';

let stateEffect = 'none';

// настройки для слайдера в зависимости от фильтра
const effectOptions =  {
  'none': {style: 'none', min: 0, max: 1, step: 1},
  'chrome': {style: 'grayscale', min: 0, max: 1, step: 0.1},
  'sepia': {style: 'sepia', min: 0, max: 1, step: 0.1},
  'marvin': {style: 'invert', min: 0, max: 100, step: 1},
  'phobos': {style: 'blur', min: 0, max: 3, step: 0.1},
  'heat': {style: 'brightness', min: 1, max: 3, step: 0.1},
};

const uploadImg = document.querySelector('.img-upload__preview img');
const sliderField = document.querySelector('.img-upload__effect-level');
const slider = sliderField.querySelector('.effect-level__slider');
const uploadEffectsField = document.querySelector('.img-upload__effects');
const effectLevelValue = document.querySelector('.effect-level__value');


const setClassToloadImg = (className) => uploadImg.className = className;
// начальные настройки слайдера
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 1,
  connect: 'lower',
});

// по движению ползунка меняю насыщенность эфекта (в зависимости от фильтра)
slider.noUiSlider.on('update', (___, handle,  values) => {
  const style = effectOptions[stateEffect].style;
  effectLevelValue.value = values[handle];

  switch (stateEffect) {
    case 'chrome':
    case 'sepia':
    case 'heat':
      uploadImg.style.filter = `${style}(${values[handle]})`; break;
    case 'marvin':
      uploadImg.style.filter = `${style}(${values[handle]}%)`; break;
    case 'phobos':
      uploadImg.style.filter = `${style}(${values[handle]}px)`; break;
    default:
      uploadImg.style.filter = '';
  }
});

// обнулить эффекты
const setDefaultEffect = () => {
  setClassToloadImg(defaultStyleImg);
  const inputs = uploadEffectsField.querySelectorAll('input');
  inputs.forEach((input) => input.checked = input.id === defaultEffectId); // выставляю checked только у none
  uploadImg.style.filter = '';
  sliderField.style.display = 'none';
};

// при переkлючении между фильтрами ...
const changeEffect = (target) => {
  sliderField.style.display = target.id === defaultEffectId ? 'none' : ''; // если выбран none - скрываю, иначе показываю слайдер
  // ... добавляю нужный класс картинке...
  const effect = target.getAttribute('id').split(splitEffect)[1];
  setClassToloadImg(addedEffect + effect);
  // меняю эффект в стате ...
  stateEffect = effect;
  // обнавляю настройки слайдера в зависимости от фильтра
  const {min, max, step} = effectOptions[effect];
  slider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step,
    start: max,
  });
};

uploadEffectsField.addEventListener('change', (evt) => changeEffect(evt.target));


export {setDefaultEffect, uploadImg};
