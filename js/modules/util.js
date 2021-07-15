const LENGTH_RANDOM_ARRAY = 10;

const getRandomInt = (min, max) => {
  [min, max] = [
    Math.min(Math.abs(min), Math.abs(max)),
    Math.max(Math.abs(min), Math.abs(max)),
  ];
  return Math.round(Math.random() * (max - min) + min);
};

const checkLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayNoRepeat = (array) => {
  const numbersArr = [];
  while (numbersArr.length < LENGTH_RANDOM_ARRAY) {
    const ranNum = getRandomInt(0, array.length - 1);
    if (!numbersArr.length || numbersArr.every((num) => num !== ranNum)) {
      numbersArr.push(ranNum);
    }
  }
  return numbersArr.map((num) => array[num]);
};

export {getRandomInt, checkLength, getRandomArrayNoRepeat};
