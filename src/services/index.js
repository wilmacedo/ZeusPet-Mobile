import moment from 'moment';

const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const errorMsg = (error) => console.log('[Services] Error: ' + error);

export const getLastItem = (setValue, setLoading) => {
  const url = baseUrl + '/items/last';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setValue(data))
    .catch((error) => errorMsg(error))
    .finally(() => setLoading(true));
}

export const getAllItems = (setData, setLoading, reverse) => {
  const url = baseUrl + '/';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(reverse ? data.reverse() : data))
    .catch((error) => errorMsg(error))
    .finally(() => setLoading(true));
}

export const getLastWeekData = (setData, setLoading) => {
  const url = baseUrl + '/';
  let tempData, finalData = [];

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => tempData = data)
    .catch((error) => errorMsg(error))
    .finally(() => {
      for (const item in tempData) {
        let dbDay = moment(tempData[item].date).format('DD');
        let nowDay = moment().format('DD');

        if (dbDay >= nowDay - 7) {
          finalData = [...finalData, tempData[item]];
        }
      }
      setData(finalData);
      setLoading(true);
    });
}

export const sendNewData = (title, value, date, setFetchData, closeAnimation) => {
  const url = baseUrl + '/';

  setFetchData(true);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "title": title,
      "value": value,
      "date": date
    })
  })
    .catch((error) => {
      errorMsg(error);
      setFetchData('error');
    })
    .finally(() => {
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