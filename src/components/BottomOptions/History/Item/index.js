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

  return (
    <Container key={id}>
      <Title>{title}</Title>
      <DateContainer>
        <AntDesign
          name="clockcircleo" 
          size={14} 
          color={colorSchema.fontLight}
        />
        <Date>{moment(date).format('hh:mm')} - {moment(date).format('D')} de {moment(date).format('MMMM')}</Date>
      </DateContainer>
      <Value>R${value.toFixed(2).replace('.', ',')}</Value>
    </Container>
  );
}

export default Item;