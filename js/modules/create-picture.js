const pictureProto = document.querySelector('#picture').content.querySelector('a');

const createPicture = ({description, likes, url, comments, id}) => {
  const picture = pictureProto.cloneNode(true);
  picture.setAttribute('data-id', id);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').setAttribute('alt', description);
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  return picture;
} ;

export {createPicture};
