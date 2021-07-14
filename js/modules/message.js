const footer = document.querySelector('.page-footer');

const showGetErrorMessage = () => {
  const div = document.createElement('div');
  div.textContent = 'ALL IS DEAD!!!';
  div.style.color = 'red';
  div.style.textAlign = 'center';
  footer.prepend(div);
  setTimeout(() => div.remove(), 2000);
};

export {showGetErrorMessage};
