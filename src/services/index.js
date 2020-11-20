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

export const getAllItems = (setData, refresh, setRefresh) => {
  const url = baseUrl + '/';

  if (refresh != null) setRefresh(true);

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error))
    .finally(() => { if (refresh != null) setRefresh(false);})
}