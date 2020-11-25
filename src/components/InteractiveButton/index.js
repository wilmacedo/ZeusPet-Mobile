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
import { getLastItem, getAllItems } from '~/services';
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
    modalReference
  } = props;

  let standardText = 'Nada por aqui';
  const [lastData, setLastData] = useState();
  const [data, setData] = useState();
  const [lastDataLoading, setLastDataLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const [storeText, setStoreText] = useState();
  const [historyText, setHistoryText] = useState();
  const [statsText, setStatsText] = useState();

  // if (!lastDataLoading) getLastItem(setLastData, setLastDataLoading);
  // if (!dataLoading) getAllItems(setData, setDataLoading);

  useEffect(() => {
    if (delaySelectedCard == 'store') {
      getLastItem(setLastData, setLastDataLoading);
      setStoreText(lastDataLoading && lastData ? lastData[0].title : standardText);
    } else if (delaySelectedCard == 'history') {
      getLastItem(setLastData, setLastDataLoading);
      if (lastDataLoading && lastData) {
        let date = lastData[0].date;
        setHistoryText(moment(date).format('D') + ' de ' + moment(date).format('MMMM'));
      }
    } else if (delaySelectedCard == 'stats') {
      getAllItems(setData, setDataLoading);
      const maxValue = getMaxValue(data, dataLoading);

      if (dataLoading && data && maxValue > 0) {
        setStatsText('R$' + formatToMoney(maxValue));
      } else {
        setStatsText(standardText);
      }
    }
  });

  const items = {
    none() {
      let none = {};
      none.name = 'none';
      none.textButton = 'Escolha uma opção!';
      none.text = () => 'Nada por aqui';

      return none;
    },
    store() {
      let store = {};
      store.name = 'store';
      store.textButton = 'Adicionar';
      store.text = storeText;
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
      history.text = historyText;
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
      stats.text = statsText;
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
    if (!lastDataLoading && !dataLoading) {
      return <ActivityIndicator size='small' color={colorSchema.black} />;
    } else {
      if (delaySelectedCard == 'history') return historyText;
      else if (delaySelectedCard == 'store') return storeText;
      else if (delaySelectedCard == 'stats') return statsText;
      else return standardText;
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