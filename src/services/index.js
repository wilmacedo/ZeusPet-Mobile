const basicUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

export const getLastItem = (setValue) => {
  const url = basicUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setValue(data[0].title))
    .catch((error) => console.log(error))
    .finally(() => console.log('[Services] Loaded data successful.'));
}