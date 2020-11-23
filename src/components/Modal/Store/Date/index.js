import React from 'react';

import {
  FormDateContainer,
  FormTimeText,
  FormDayContainer,
  FormDayText
} from './styles';

import moment from 'moment';

const Date = () => {
  const date = moment();

  const renderMonth = () => {
    const month = date.format('MMMM');
    return month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  }

  return (
    <FormDateContainer>
      <FormTimeText
        editable={false}
        value={date.format('HH')}
        keyboardType={'numeric'}
        maxLength={2}
        onChangeText={(value) => setHourValue(value)}
      />
      <FormTimeText
        value={':'}
        editable={false}
      />
      <FormTimeText
        editable={false}
        value={date.format('mm')}
        keyboardType={'numeric'}
        maxLength={2}
        onChangeText={(value) => setMinValue(value)}
      />
      <FormDayContainer>
        <FormDayText
          editable={false}
          style={{
            fontSize: 25
          }}
          value={date.format('DD')}
          maxLength={2}
          keyboardType={'numeric'}
          onChangeText={(value) => setDayValue(value)}
        />
        <FormDayText
          editable={false}
          value={renderMonth()}
        />
      </FormDayContainer>
    </FormDateContainer>
  );
}

export default Date;