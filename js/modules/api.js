const getData = () => (
  fetch('https://23.javascript.pages.academy/kekstagram/data1')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // console.log('12345')
        throw new Error(response.status);
      }
    })
    .catch(() => console.error('ERROR'))
);

export {getData};
