const basicUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

export const getLastItem = async () => {
  const url = basicUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
    const { title } = responseJson;
    console.log(title);
    return responseJson.title;
  })
  .catch((error) => {
    console.log(error);
  })
}