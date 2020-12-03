import React, { useEffect, useState } from 'react';

import {
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';

import {
  Container,
  BoxContainer,
  BoxText,
  ActionButtonText,
  ActionButtonStyle
} from './styles';

import { colorSchema, formatToMoney } from '~/utils';
import { getLastItem, getAllItems, isEmpty } from '~/services';
import { getMaxValue } from '~/components/Modal/Charts/filter-data';

import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import moment, { max } from 'moment';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    modalReference,
    data,
    lastData,
    lastLoading,
    dataLoading
  } = props;

  let standardText = 'Nada por aqui';
  const [displayText, setDisplayText] = useState(standardText);

  useEffect(() => {
    if (delaySelectedCard === 'store') {
      setDisplayText(lastLoading && !isEmpty(lastData) ? lastData[0].title : standardText)
    } else if (delaySelectedCard === 'history') {
      if (lastLoading && !isEmpty(lastData)) {
        let date = lastData[0].date;
        setDisplayText(moment(date).format('D') + ' de ' + moment(date).format('MMMM'));
      }
    } else if (delaySelectedCard === 'stats') {
      const maxValue = getMaxValue(data, dataLoading);

      if (dataLoading && !isEmpty(data) && maxValue > 0) {
        setDisplayText('R$' + formatToMoney(maxValue));
      } else {
        setDisplayText(standardText);
      }
    }
  });

  const items = {
    none() {
      let none = {};
      none.name = 'none';
      none.textButton = 'Escolha uma opção!';
      none.text = () => standardText;

      return none;
    },
    store() {
      let store = {};
      store.name = 'store';
      store.textButton = 'Adicionar';
      store.icon = <MaterialIcons
        name='pets'
        size={24}
        color={colorSchema.black}
      />;

      return store;
    },
    history() {
      let history = {};
      history.name = 'history';
      history.textButton = 'Pesquisar';
      history.icon = <Feather
        name='calendar'
        size={24}
        color={colorSchema.black}
      />;

      return history;
    },
    stats() {
      let stats = {};
      stats.textButton = 'Visualizar';
      stats.name = 'stats';
      stats.icon = <MaterialCommunityIcons
        name="chart-timeline-variant"
        size={24}
        color={colorSchema.black}
      />;

      return stats;
    }
  }

  const renderIcon = () => items[delaySelectedCard]().icon;

  const renderText = () => {
    if (!lastLoading && !dataLoading) {
      <ActivityIndicator size='small' color={colorSchema.black} />;
    } else {
      return displayText;
    }
  }

  return (
    <Container>
      <BoxContainer>
        {renderIcon()}
        <BoxText
          style={{ fontSize: delaySelectedCard == 'history' ? 15 : 16 }}
        >
          {renderText()}
        </BoxText>
      </BoxContainer>
      <TouchableWithoutFeedback
        onPress={() => { if (selectedCard != 'none') modalReference.current?.open() }}
      >
        <Animated.View
          style={[ActionButtonStyle, { width }]}
        >
          <ActionButtonText>
            {items[selectedCard]().textButton}
          </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container >
  );
}

export default InteractiveButton;