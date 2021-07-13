
const splitEffect = 'effect-';
const addedEffect = 'effects__preview--';
const defaultStyleImg = 'effects__preview--none';

const state2 = {
  effect: 'none',
};

// настройки для слайдера в зависимости от фильтра
const effectFunctions =  {
  'none': {style: 'none', min: 0, max: 0, step: 0},
  'chrome': {style: 'grayscale', min: 0, max: 1, step: 0.1},
  'sepia': {style: 'sepia', min: 0, max: 1, step: 0.1},
  'marvin': {style: 'invert', min: 0, max: 100, step: 1},
  'phobos': {style: 'blur', min: 0, max: 3, step: 0.1},
  'heat': {style: 'brightness', min: 1, max: 3, step: 0.1},
};

const uploadImg = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const uploadEffectsField = document.querySelector('.img-upload__effects');

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
  if (['chrome', 'sepia', 'heat'].some((fil) => fil === state2.effect) ) {
    uploadImg.style.filter = `${effectFunctions[state2.effect].style}(${values[handle]})`;
  } else if (state2.effect === 'marvin') {
    uploadImg.style.filter = `${effectFunctions[state2.effect].style}(${values[handle]}%)`;
  } else if (state2.effect === 'phobos') {
    uploadImg.style.filter = `${effectFunctions[state2.effect].style}(${values[handle]}px)`;
  }
});

// при переслючении между фильтрами ...
const changeEffect = (target) => {
  // ... добавляю нужный класс картинке...
  const effect = target.getAttribute('id').split(splitEffect)[1];
  setClassToloadImg(addedEffect + effect);
  // меняю эффект в стате ...
  state2.effect = effect;
  // обнавляю настройки слайдера в зависимости от фильтра
  const {min, max, step} = effectFunctions[effect];
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
export {setClassToloadImg, defaultStyleImg};
