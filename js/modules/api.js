const getData = () => (
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    // .then(response => {
    //   console.log(response);
    //   return response;
    // })

);

const postData = (form, showPostOk, showPostFail) => {
  fetch('https://23.javascript.pages.academy/kekstagram', {
    body: new FormData(form),
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
};

export {getData, postData};
