const COMMENTS_COUNT = 5;

const uploadCommentsListener = (commentsList) => {
  const upploadBtn = document.querySelector('.social__comments-loader');
  const nowCommentsCountSpan = document.querySelector('.js-comment-count-now');

  let commentsNow = 5;
  const comments = Array.from(commentsList.querySelectorAll('.social__comment'));

  const showSomeComments = (array, num) => {
    let showCount;
    if (array.length > num) {
      showCount = num;
      upploadBtn.classList.remove('hidden');
    } else {
      showCount = array.length;
      upploadBtn.classList.add('hidden');
    }
    const needComments = array.slice(0, showCount);
    needComments.forEach((item) => item.classList.remove('hidden'));
    nowCommentsCountSpan.textContent = showCount;

  };

  showSomeComments(comments, commentsNow);

  upploadBtn.addEventListener('click', () => {
    commentsNow += COMMENTS_COUNT;
    showSomeComments(comments, commentsNow);
  });
};

export {uploadCommentsListener};
