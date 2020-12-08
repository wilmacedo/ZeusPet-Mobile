import { auth } from '~/utils';

const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus/';

const errorMsg = (error) => console.log('[Services] ' + error);

export const getLastItem = (data) => {
  if (data) {
    let size = Object.keys(data).length;
    for (const item in data) {
      if (parseInt(item) === size - 1) {
        return data[item];
      }
    }
  }

  return undefined;
}

export const getAllItems = (setData, setLoading) => {
  const url = baseUrl + '/';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => errorMsg(error))
    .finally(() => setLoading(true));
}

export const sendNewData = (
  fullData, petName, newData, setFetchData, closeAnimation
) => {
  let url = '';

  for (const item in fullData) {
    let username = fullData[item].username;
    let password = fullData[item].password;

    if (auth(username, password)) {
      url = baseUrl + fullData[item]._id + '/';

      for (const pet in fullData[item].pets) {
        if (petName === fullData[item].pets[pet].name) {
          url += fullData[item].pets[pet]._id;
        }
      }
    } else {
      // Auth error
    }
  }

  fetch(url, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .catch((error) => {
      errorMsg(error);
      setFetchData('error');
    })
    .finally(() => {
      setFetchData(true);
      closeAnimation();
    });
}

export const isEmpty = (object) => {
  for (const item in object) {
    if (object.hasOwnProperty(item)) {
      return false;
    }
  }

  return true;
}