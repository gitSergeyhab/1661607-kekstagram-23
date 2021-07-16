const LENGTH_RANDOM_ARRAY = 10;

const getRandomInt = (min, max) => {
  [min, max] = [
    Math.min(Math.abs(min), Math.abs(max)),
    Math.max(Math.abs(min), Math.abs(max)),
  ];
  return Math.round(Math.random() * (max - min) + min);
};

const checkLength = (string, maxLength) => string.length <= maxLength;

const getRandomArray = (array) => {
  const numbersArr = [];
  while (numbersArr.length < LENGTH_RANDOM_ARRAY) {
    const ranNum = getRandomInt(0, array.length - 1);
    if (!numbersArr.length || numbersArr.every((num) => num !== ranNum)) {
      numbersArr.push(ranNum);
    }
  }
  return numbersArr.map((num) => array[num]);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл "поставить таймаут - удалить таймаут" будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

export {getRandomInt, checkLength, getRandomArray, debounce};
