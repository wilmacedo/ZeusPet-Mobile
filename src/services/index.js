const basicUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

export const getLastItem = () => {
  const url = basicUrl + '/items/last';

  return fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0].title;
    })
    .catch((error) => {
      console.log(error);
    });
}