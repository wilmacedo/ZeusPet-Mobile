import React from 'react';

import {
  Container,
  Title,
  Date,
  DateContainer,
  Value
} from './styles';

import { colorSchema, formatToMoney } from '~/utils';

import { AntDesign } from '@expo/vector-icons';

import moment from 'moment';

const Item = (props) => {
  const {
    id,
    title,
    date,
    value
  } = props;

  return (
    <Container>
      <Title>{!title ? 'Desconhecido' : title}</Title>
      <DateContainer>
        <AntDesign
          name="clockcircleo"
          size={14}
          color={colorSchema.fontLight}
        />
        <Date>{moment(date).format('HH:mm')} - {moment(date).format('D')} de {moment(date).format('MMMM')}</Date>
      </DateContainer>
      <Value>R${!value ? '?' : formatToMoney(value)}</Value>
    </Container>
  );
}

export default Item;