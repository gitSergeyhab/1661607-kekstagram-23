const urls = {
  get: 'https://23.javascript.pages.academy/kekstagram/data',
  post: 'https://23.javascript.pages.academy/kekstagram',
};

const getData = () => (
  fetch(urls.get)
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
  fetch(urls.post, {
    body: new FormData(form),
    method: 'post',
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .then(showPostOk)
    .catch(showPostFail);
};

export {getData, postData};
