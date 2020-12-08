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
import { isEmpty, getLastItem } from '~/services';
import { getMaxValue } from '~/components/Modal/Charts/filter-data';

import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import moment from 'moment';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    modalReference,
    data,
    loading
  } = props;

  let standardText = 'Nada por aqui';
  const [displayText, setDisplayText] = useState(standardText);

  useEffect(() => {
    if (delaySelectedCard === 'store') {
      setDisplayText(data && !isEmpty(data) ? getLastItem(data).title : standardText)
    } else if (delaySelectedCard === 'history') {
      if (loading && !isEmpty(data)) {
        let date = getLastItem(data).date;
        setDisplayText(moment(date).format('D') + ' de ' + moment(date).format('MMMM'));
      }
    } else if (delaySelectedCard === 'stats') {
      const maxValue = getMaxValue(data, loading);

      if (loading && !isEmpty(data) && maxValue > 0) {
        setDisplayText('R$' + formatToMoney(maxValue));
      } else {
        setDisplayText(standardText);
      }
    }
  }, [delaySelectedCard]);

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
    return !loading ?
      <ActivityIndicator size='small' color={colorSchema.black} /> :
      displayText;
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