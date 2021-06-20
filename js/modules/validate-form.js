const MAX_LEN_COMMENT = 140;

const validateForm = () => {
  const form = document.querySelector('.img-upload__form');
  const imgOverlay = form.querySelector('.img-upload__overlay');
  const uploadFile = form.querySelector('#upload-file');
  const btnCloseModal = form.querySelector('.img-upload__cancel');
  const btniUploadImgSubmit = form.querySelector('.img-upload__submit');
  const commentArea = form.querySelector('.text__description');
  const hashTagInput = form.querySelector('.text__hashtags');

  // imgOverlay.classList.remove('hidden'); // for del

  const closeModal = () => {
    uploadFile.value = null;
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    btnCloseModal.removeEventListener('click', closeModal);
    btniUploadImgSubmit.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
  };

  uploadFile.addEventListener('change', () => {
    imgOverlay.classList.remove('hidden');
    btnCloseModal.addEventListener('click', closeModal);
    btniUploadImgSubmit.addEventListener('click', closeModal);
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27 && commentArea !== document.activeElement) {
        closeModal(); // закрыть попап по эскейпу, если нет фокуса на поле коментария
      }
    });
    document.body.classList.add('modal-open');
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

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
