/* eslint-disable id-length */
import {commentArea, hashTagInput} from './form.js';

const MAX_LEN_COMMENT = 140;

const validateForm = () => {
  commentArea.addEventListener('input', () => {
    if (commentArea.value.length > MAX_LEN_COMMENT) {
      commentArea.setCustomValidity(`Комментарий слишком длинный. Удалите ${commentArea.value.length - MAX_LEN_COMMENT} символов`);
    } else {
      commentArea.setCustomValidity('');
    }
    commentArea.reportValidity();
  });

  const hashtagPattern = /^#[ёЁа-яА-Яa-zA-Z0-9]{1,19}$/;

  const compareTags = (tags) => {
    for (let i = 0; i < tags.length-1; i++) {
      for (let j = i+1; j < tags.length; j++) {
        if (tags[i] === tags[j]) {
          return false;
        }
      }
    }
    return true;
  };

  const checkhashTags = (value) => {
    const values = value.trim().split(' ').map((val) => val.toLowerCase());
    const tagsGoodCount = values.length < 6;
    const tagsGoodPattern = values.reduce((acc, elem) => acc && hashtagPattern.test(elem), true);
    return tagsGoodCount && tagsGoodPattern && compareTags(values);
  };

  hashTagInput.addEventListener('input', (evt) => {
    const value = evt.target.value;
    if(!checkhashTags(value) && value.length > 0) {
      hashTagInput.setCustomValidity('Ваши хэштеги не проходят валидацию');
    } else {
      hashTagInput.setCustomValidity('');
    }
    hashTagInput.reportValidity();
  });

};

export {validateForm};
