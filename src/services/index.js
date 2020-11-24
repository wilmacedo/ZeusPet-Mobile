import moment from 'moment';

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