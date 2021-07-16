import {uploadFile} from './form.js';
import {uploadImg} from './slider.js';

const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];

const showChosenImg = () => {
  uploadFile.addEventListener('change', () => {
    const file = uploadFile.files[0];
    // проверка, что файл есть и его имя в нижн регис кончается на что-то из FILE_TYPES
    if (file && FILE_TYPES.some((fileType) => file.name.toLowerCase().endsWith(fileType))) {
      const reader = new FileReader();
      reader.addEventListener('load', () => uploadImg.src = reader.result);
      reader.readAsDataURL(file);
    }
  });
};

export {showChosenImg};
