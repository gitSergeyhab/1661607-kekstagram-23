const ACTIVE_FILTER_CLASS = 'img-filters__button--active';
const INACTIVE_FILTERS_CLASS = 'img-filters--inactive';

const imgFilters = document.querySelector('.img-filters');
const filterBtns = imgFilters.querySelectorAll('.img-filters__button');

const showFilter = () => {
  imgFilters.classList.remove(INACTIVE_FILTERS_CLASS);
};

const markerFilters = () => {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((btnIn) => btnIn.classList.remove(ACTIVE_FILTER_CLASS));
      btn.classList.add(ACTIVE_FILTER_CLASS);
    });
  });
};

const countComment = (photo) => photo.comments.length;

const sortByComment = (array) => array.sort((photo1, photo2) => countComment(photo2) - countComment(photo1));

export {showFilter, markerFilters, imgFilters, sortByComment};
