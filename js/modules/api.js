const getData = () => (
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
);

const postData = (form, showPostOk, showPostFail) => {
  fetch('https://23.javascript.pages.academy/kekstagram ', {
    body: new FormData(),
    method: 'post',
  })
    .then((response) => {
      if (response.ok) {
        return response.json;
      } else {
        throw new Error(response.status);
      }
    })
    .then(showPostOk)
    .catch(showPostFail);
}

export {getData, postData};
