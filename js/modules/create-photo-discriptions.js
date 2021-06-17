import {ARRAY_LENGTH, ID_COMMENT_COUNT, COMMENT_MAX_LENGTH, ID_AUTHOR_COUNT, messages, names} from './data.js';
import {getRandomInt, checkLength} from './util.js';

const createPhotoDiscriptions = () => {
  const createMessage = (array) => {
    let newMessage = '';
    for (let ind = 0; ind <= getRandomInt(0, 1); ind++) {
      newMessage += `${array[getRandomInt(0, array.length - 1)]} `;
    }
    return newMessage.trim();
  };

  const commentIdArray = []; // массив уникальных айди

  const createComment = () => {
    let commentId = getRandomInt(1, ID_COMMENT_COUNT);
    while (commentIdArray.indexOf(commentId) !== -1) { // если айди еще нет в массиве, вставляем его в объект
      commentId = getRandomInt(1, ID_COMMENT_COUNT);
    }
    commentIdArray.push(commentId);

    const authorId = getRandomInt(1, ID_AUTHOR_COUNT);

    return {
      id: commentId,
      avatar: `img/avatar-${authorId}.svg`,
      message: createMessage(messages),
      name: names[authorId - 1],
    };
  };

  const createPhotoDiscription = (index) => ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: `this is the discription of photo № ${index + 1}`,
    likes: getRandomInt(15, 200),
    comments: new Array(getRandomInt(1, COMMENT_MAX_LENGTH)).fill(null).map(() => createComment()),
  });

  return new Array(ARRAY_LENGTH).fill(null).map((photo, index) => createPhotoDiscription(index));
};

export {createPhotoDiscriptions};
