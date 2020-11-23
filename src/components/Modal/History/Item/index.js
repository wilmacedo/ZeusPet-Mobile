import React from 'react';

import {
  Container,
  Title,
  Date,
  DateContainer,
  Value
} from './styles';

import { AntDesign } from '@expo/vector-icons';
import { colorSchema } from '~/utils';

import moment from 'moment';

const Item = (props) => {
  const {
    id,
    title,
    date,
    value
  } = props;

  const renderValue = () => {
    let formattedValue = value.toFixed(2).replace('.', ',');
    if (value >= 1000 && value < 10000) {
      formattedValue = formattedValue.charAt(0) + '.' + formattedValue.slice(1);
    }
    return formattedValue;
  }

  return (
    <Container key={id}>
      <Title>{!title ? 'Desconhecido' : title}</Title>
      <DateContainer>
        <AntDesign
          name="clockcircleo"
          size={14}
          color={colorSchema.fontLight}
        />
        <Date>{moment(date).format('HH:mm')} - {moment(date).format('D')} de {moment(date).format('MMMM')}</Date>
      </DateContainer>
      <Value>R${!value ? '?' : renderValue()}</Value>
    </Container>
  );
}

export default Item;