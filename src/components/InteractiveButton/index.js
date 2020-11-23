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

import { getLastItemTitle } from '~/services';

import { colorSchema } from '~/utils';

import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { getLastItemDate } from '../../services';

import moment from 'moment';

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

  getLastItemTitle(setShopItem);
  getLastItemDate(setHistoryItem);

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
      return moment(historyItem).format('D') + ' de ' + moment(historyItem).format('MMMM');
    } else if (delaySelectedCard == 'stats') {
      return statsItem;
    }
  }

  const textButton = {
    none() {
      return 'Escolha uma opção!';
    },
    store() {
      return 'Adicionar';
    },
    history() {
      return 'Pesquisar';
    }
  }

  return (
    <Container>
      <BoxContainer>
        <Icon />
        <BoxText
          style={{ fontSize: delaySelectedCard == 'history' ? 15 : 16 }}
        >
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
            {textButton[selectedCard] ? textButton[selectedCard]() : 'Adicionar'}
          </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default InteractiveButton;