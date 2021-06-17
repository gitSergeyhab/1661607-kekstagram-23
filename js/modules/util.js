const getRandomInt = (min, max) => {
  [min, max] = [
    Math.min(Math.abs(min), Math.abs(max)),
    Math.max(Math.abs(min), Math.abs(max)),
  ];
  return Math.round(Math.random() * (max - min) + min);
};

const checkLength = (string, maxLength) => string.length <= maxLength;

export {getRandomInt, checkLength};
