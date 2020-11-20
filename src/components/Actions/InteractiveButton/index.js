import React, { useEffect, useState } from 'react';

import { Animated } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  BoxContainer,
  BoxText,
  ActionButtonText,
  ActionButtonStyle
} from './styles';

import { getLastItem } from '~/services';

import { colorSchema } from '~/utils';

import { MaterialIcons, Feather } from '@expo/vector-icons';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    bottomSheet
  } = props;  

  let standardText = 'Nada por aqui :|';
  const [shopItem, setShopItem] = useState(standardText);
  const [statsItem, setStatsItem] = useState(standardText);
  
  getLastItem(setShopItem);

  const Icon = () => {
    if (delaySelectedCard == 'store') {
      return <MaterialIcons
        name='pets'
        size={24}
        color={colorSchema.black}
      />
    } else if (delaySelectedCard == 'stats') {
      return <Feather
        name='calendar'
        size={24}
        color={colorSchema.black}
      />
    }

    return <></>;
  }

  return (
    <Container>
      <BoxContainer>
        <Icon />
        <BoxText>
          {delaySelectedCard == 'store' ? shopItem : statsItem}
        </BoxText>
      </BoxContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          if (selectedCard != 'none') {
            bottomSheet.current.snapTo(0);
          }
        }}
      >
        <Animated.View
          style={[ActionButtonStyle, { width }]}
        >
          <ActionButtonText>
            {selectedCard == 'none' ? 'Escolha uma opção!' : 'Adicionar'}
          </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default InteractiveButton;