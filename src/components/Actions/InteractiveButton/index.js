import React, { useState } from 'react';

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

import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    modalReference
  } = props;

  let standardText = 'Nada por aqui';
  const [shopItem, setShopItem] = useState(standardText);
  const [historyItem, setHistoryItem] = useState(standardText);
  const [statsItem, setStatsItem] = useState(standardText);

  getLastItem(setShopItem);

  const Icon = () => {
    if (delaySelectedCard == 'store') {
      return <MaterialIcons
        name='pets'
        size={24}
        color={colorSchema.black}
      />
    } else if (delaySelectedCard == 'history') {
      return <Feather
        name='calendar'
        size={24}
        color={colorSchema.black}
      />
    } else if (delaySelectedCard == 'stats') {
      return <MaterialCommunityIcons
        name="chart-timeline-variant"
        size={24}
        color={colorSchema.black}
      />
    }

    return <></>;
  }

  const renderText = () => {
    if (delaySelectedCard == 'store') {
      return shopItem;
    } else if (delaySelectedCard == 'history') {
      return historyItem;
    } else if (delaySelectedCard == 'stats') {
      return statsItem;
    }
  }

  return (
    <Container>
      <BoxContainer>
        <Icon />
        <BoxText>
          {renderText()}
        </BoxText>
      </BoxContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          if (selectedCard != 'none') {
            modalReference.current?.open();
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