import React, { useState } from 'react';

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
import { filterData, getMaxValue } from '~/components/Modal/Charts/filter-data';

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
    modalReference
  } = props;

  let standardText = 'Nada por aqui';
  const [lastData, setLastData] = useState();
  const [data, setData] = useState();
  const [lastDataLoading, setLastDataLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  if (!lastDataLoading) getLastItem(setLastData, setLastDataLoading);
  if (!dataLoading) getAllItems(setData, setDataLoading);

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
      store.icon = <MaterialIcons
        name='pets'
        size={24}
        color={colorSchema.black}
      />;
      store.text = () => lastDataLoading && lastData ? lastData[0].title : standardText;

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
      history.text = () => {
        if (lastDataLoading && lastData) {
          let date = lastData[0].date;
          return moment(date).format('D') + ' de ' + moment(date).format('MMMM');
        }

        return standardText;
      }

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
      stats.text = () => {
        const maxValue = getMaxValue(data, dataLoading);

        if (dataLoading && data) return maxValue == 0 ? standardText : 'R$' + formatToMoney(maxValue);

        return standardText;
      };

      return stats;
    }
  }

  const renderIcon = () => items[delaySelectedCard]().icon;

  const renderText = () => {
    if (!lastDataLoading && !dataLoading) {
      return <ActivityIndicator size='small' color={colorSchema.black} />;
    } else {
      return items[delaySelectedCard]().text();
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
    </Container>
  );
}

export default InteractiveButton;