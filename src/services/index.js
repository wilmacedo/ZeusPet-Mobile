const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const loadSuccess = () => console.log('[Services] Loaded data successful.');
const errorMsg = (error) => console.log('[Services] Error: ' + error);

export const getLastItem = (setValue) => {
  const url = baseUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setValue(data[0].title))
    .catch((error) => errorMsg(error))
    .finally(() => loadSuccess());
}

export const getAllItems = (setData) => {
  const url = baseUrl = '/';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error))
    .finally(() => console.log('[Services] Loaded'))
}