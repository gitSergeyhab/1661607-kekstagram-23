import {commentArea, hashTagInput, uploadSubmit} from './form.js';

const MAX_LEN_COMMENT = 140;
const TAGS_MAX = 5;
const HASHTAG_PATTERN = /^#[ёЁа-яА-Яa-zA-Z0-9]{1,19}$/;
const HASHTAG_ERROR_MESSAGE = 'Ваши хэштеги не проходят валидацию';
const ERROR_BORDER_STYLE = '4px solid red';

const commentError = (value) => `Комментарий слишком длинный. Удалите ${value} символов`;

const validateForm = () => {
  commentArea.addEventListener('input', () => {
    if (commentArea.value.length > MAX_LEN_COMMENT) {
      commentArea.setCustomValidity(commentError(commentArea.value.length - MAX_LEN_COMMENT));
    } else {
      commentArea.setCustomValidity('');
    }
    commentArea.reportValidity();
  });

  const compareTags = (tags) => {
    for (let i = 0; i < tags.length-1; i++) {
      if (tags.slice(i + 1).some((tag) => tag === tags[i])) {
        return false;
      }
    }
    return true;
  };

  const checkHashTags = (value) => {
    const values = value.toLowerCase().trim() // в нижний регистр и обрезать пробелы
      .split(' ').filter((tag) => tag); // разбить и убрать ""
    const tagsGoodCount = values.length <= TAGS_MAX;
    const tagsGoodPattern = values.reduce((acc, elem) => acc && HASHTAG_PATTERN.test(elem), true);
    return tagsGoodCount && tagsGoodPattern && compareTags(values);
  };

  hashTagInput.addEventListener('input', (evt) => {
    const value = evt.target.value;
    if(!checkHashTags(value) && value.length > 0) {
      hashTagInput.setCustomValidity(HASHTAG_ERROR_MESSAGE);
    } else {
      hashTagInput.setCustomValidity('');
      hashTagInput.style.border = '';
    }
    hashTagInput.reportValidity();
  });

  //а неверно заполненные поля подсвечиваются красной рамкой.
  uploadSubmit.addEventListener('click', () => {
    [commentArea, hashTagInput].forEach((field) => {
      if (!field.checkValidity()) {
        field.style.border = ERROR_BORDER_STYLE;
      }
    });
  });
};

export {validateForm};
