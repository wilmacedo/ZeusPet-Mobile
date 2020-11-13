import React, { useState } from 'react';

import {
  Container,
  BoxContainer,
  BoxText,
  ActionButtonContainer,
  ActionButtonText
} from './styles';

import { colorScheme } from '../../utils';

import { Feather } from '@expo/vector-icons';

const BottomInfo = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  return (
    <Container>
      <BoxContainer>
        <Feather
          name="calendar"
          size={24}
          color={colorScheme.black}
        />
        <BoxText
          style={{ fontSize: selectedBox == null ? 12 : 14 }}
        >
          Escolha uma opção!
            </BoxText>
      </BoxContainer>
      <ActionButtonContainer>
        <ActionButtonText>
          Comprar
            </ActionButtonText>
      </ActionButtonContainer>
    </Container>
  );
}

export default BottomInfo;