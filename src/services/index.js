const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const errorMsg = (error) => console.log('[Services] Error: ' + error);

export const getLastItemTitle = (setValue) => {
  const url = baseUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setValue(data[0].title))
    .catch((error) => errorMsg(error));
}

export const getLastItemDate = (setValue) => {
  const url = baseUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setValue(data[0].date))
    .catch((error) => errorMsg(error));
}

export const getAllItems = (setData, setLoading) => {
  const url = baseUrl + '/';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => errorMsg(error))
    .finally(() => setLoading(true))
}