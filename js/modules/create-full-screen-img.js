import {uploadCommentsListener} from './upload-comments-listener.js';
import {getData} from './api.js';
import {showGetErrorMessage} from './message.js';

const createFullScreenImg = (id) => {
  const bigPicture = document.querySelector('.big-picture');

  const createCommentElement = ({avatar, message, name}) => `
  <li class="social__comment hidden">
    <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35" height="35">
    <p class="social__text">${message}</p>
  </li>`;

  // показ выбранного фото
  const showOnePhoto = (needPhoto) => {
    if(needPhoto && needPhoto.length) {
      const {url, likes, comments, description} = needPhoto[0];
      bigPicture.querySelector('.big-picture__img img').src = url;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
      bigPicture.querySelector('.social__caption').innerHTML = description;

      const commentsList = bigPicture.querySelector('.social__comments');
      const commentsHtml = comments.reduce((acc, elem) => acc + createCommentElement(elem), ''); //все коментарии одной строкой
      commentsList.innerHTML = commentsHtml;
      uploadCommentsListener(commentsList);
    }
  };
  return getData()
    .then((results) => results.filter((result) => result.id === +id)) // фильтр полученных данных по айди
    .then(showOnePhoto)
    .catch(showGetErrorMessage);
};

export {createFullScreenImg};
