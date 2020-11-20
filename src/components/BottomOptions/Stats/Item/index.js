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

const Item = (props) => {
  const {
    title,
    date,
    value
  } = props;
  
  return (
    <Container>
      <Title>{title}</Title>
      <DateContainer>
        <AntDesign 
          name="clockcircleo" 
          size={14} 
          color={colorSchema.fontLight}
        />
        <Date>{date}</Date>
      </DateContainer>
      <Value>R${value}</Value>
    </Container>
  );
}

export default Item;