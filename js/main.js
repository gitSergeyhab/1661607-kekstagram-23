const getRandomInt = (min, max) => {
  [min, max] = [
    Math.min(Math.abs(min), Math.abs(max)),
    Math.max(Math.abs(min), Math.abs(max)),
  ];
  return Math.round(Math.random() * (max - min) + min);
}

// Функция для проверки максимальной длины строки

const checkLength = (string, maxLength) => string.length <= maxLength;

console.log(checkLength('qwsadcsca', 20), getRandomInt(1,3));
