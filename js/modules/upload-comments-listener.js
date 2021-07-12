const COMMENTS_COUNT_PLUS = 5;
const COMMENTS_COUNT_START = 5;


const uploadCommentsListener = (commentsList) => {
  const uploadBtn = document.querySelector('.social__comments-loader');
  const nowCommentsCountSpan = document.querySelector('.js-comment-count-now');

  let commentsNow = COMMENTS_COUNT_START;
  const comments = Array.from(commentsList.querySelectorAll('.social__comment'));

  const showSomeComments = (array, num) => {
    let showCount;
    if (array.length > num) {
      showCount = num;
      uploadBtn.classList.remove('hidden');
    } else {
      showCount = array.length;
      uploadBtn.classList.add('hidden');
    }
    const needComments = array.slice(0, showCount);
    needComments.forEach((item) => item.classList.remove('hidden'));
    nowCommentsCountSpan.textContent = showCount;
  };

  showSomeComments(comments, commentsNow);

  uploadBtn.addEventListener('click', () => {
    commentsNow += COMMENTS_COUNT_PLUS;
    showSomeComments(comments, commentsNow);
  });
};

export {uploadCommentsListener};
