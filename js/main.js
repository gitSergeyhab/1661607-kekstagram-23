const getRandomInt = (min, max) => {
  [min, max] = [
    Math.min(Math.abs(min), Math.abs(max)),
    Math.max(Math.abs(min), Math.abs(max)),
  ];
  return Math.round(Math.random() * (max - min) + min);
};

// Функция для проверки максимальной длины строки

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('qwsadcsca', 20);
getRandomInt(1, 3);


// -------------------- //

const ARRAY_LENGTH = 25;
const ID_COMMENT_COUNT = 1000;
const COMMENT_MAX_LENGTH = 4;
const ID_AUTHOR_COUNT = 6;


const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createMessage = (array) => {
  let newMessage = '';
  for (let ind = 0; ind <= getRandomInt(0, 1); ind++) {
    newMessage += `${array[getRandomInt(0, array.length - 1)]} `;
  }
  return newMessage.trim();
};

const commentIdArray = [];
const names = ['Andry', 'Boris', 'Costia', 'Dima', 'Emelia', 'Fedia'];

const createComment = () => {
  let commentId = getRandomInt(1, ID_COMMENT_COUNT);
  while (commentIdArray.indexOf(commentId) !== -1) {
    commentId = getRandomInt(1, ID_COMMENT_COUNT);
  }
  commentIdArray.push(commentId);

  const authorId = getRandomInt(1, ID_AUTHOR_COUNT);

  return {
    id: commentId,
    avatar: `img/avatar-${authorId}.svg`,
    message: createMessage(messages),
    mame: names[authorId - 1],
  };
};

// const createCommentArray = () => {
//   const commenIdArray = [];
//   for (let ind = 0; ind < getRandomInt(1, COMMENT_MAX_LENGTH); ind++) {
//     commenIdArray.push(createComment());
//   }
//   return commenIdArray;
// };

const createPhotoDiscription = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: `this is the discription of photo № ${index + 1}`,
  likes: getRandomInt(15, 200),
  comments: new Array(getRandomInt(1, COMMENT_MAX_LENGTH)).fill(null).map(() => createComment()),
});

const photoDiscriptions = new Array(ARRAY_LENGTH).fill(null).map((photo, index) => createPhotoDiscription(index));
photoDiscriptions;

// console.log(photoDiscriptions);
