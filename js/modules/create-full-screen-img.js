import {photoDiscriptions} from './create-picture-fragment.js';
import {uploadCommentsListener} from './upload-comments-listener.js';

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

  const needPhoto = photoDiscriptions.filter((discript) => discript.id === +id)[0];
  if(needPhoto) {
    bigPicture.classList.remove('hidden');
    const {url, likes, comments, description} = needPhoto;
    const commentsHtml = comments.reduce((acc, elem) => acc + createCommentElement(elem), '');

    bigPicture.querySelector('.big-picture__img img').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comments.length;
    const commentsList = bigPicture.querySelector('.social__comments');
    commentsList.innerHTML = commentsHtml;
    bigPicture.querySelector('.social__caption').innerHTML = description;
    uploadCommentsListener(commentsList);
  }
};

export {createFullScreenImg};
